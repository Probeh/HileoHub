import { Observable    } from 'rxjs'
import { HttpClient    } from '@angular/common/http'
import { Injectable    } from '@angular/core'
import { Params        } from '@angular/router'
import { SearchScopes  } from '@enums/github-scopes'
import   builder         from '@helpers/search-builder'
import { SharedOptions } from '@helpers/shared-options'
import { UserResult    } from '@models/user-result.dto'
import { UserSearch    } from '@models/user-search.dto'

@Injectable()
export class GithubService {
  // ======================================= //
  private _search: Dictionary = {};
  // ======================================= //
  constructor(private options: SharedOptions, private http: HttpClient) {
    this._search = localStorage.getItem('search') ? JSON.parse(localStorage.getItem('search')) : {};
  }
  // ======================================= //
  public getCachedUsers(): Observable<UserResult[]> {
    return new Observable<UserResult[]>(emitter => emitter.next(this._search[SearchScopes.Users] ? this._search[SearchScopes.Users] : []));
  }
  public async searchUsers(query: Params): Promise<Observable<UserResult[]>> {
    const response = await this.http
      .get<UserSearch>(builder()[SearchScopes.Users], { params: query })
      .toPromise();
    this._search[SearchScopes.Users] = !this._search[SearchScopes.Users]
      ? new Array<UserResult>()
      : this._search[SearchScopes.Users];
    return this.processUsers(response.items);
  }
  public getUserByLogin(login?: string) {
    return login != undefined ? this._search[SearchScopes.Users]?.find((user: UserResult) => user.login == login) : null;
  }
  private processUsers(users: UserResult[]): Observable<UserResult[]> {
    return new Observable<UserResult[]>((emitter) => {
      users.forEach(async (user: UserResult) => {
        if (!this._search[SearchScopes.Users].includes((item: UserResult) => item.id == user.id)) {
          this._search[SearchScopes.Users].push(await this.http.get<UserResult>(user.url).toPromise());
        }
      });
      emitter.next(this._search[SearchScopes.Users].slice().filter((user: UserResult) => users.some(x => x.id == user.id)));
      this.updateStorage();
    });
  }
  private updateStorage() {
    localStorage.setItem('search', JSON.stringify(this._search));
  }
}
export interface Dictionary {
  [scope: string]: any[];
}
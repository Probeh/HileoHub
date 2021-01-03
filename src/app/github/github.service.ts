import { Observable    } from 'rxjs'
import { HttpClient    } from '@angular/common/http'
import { Injectable    } from '@angular/core'
import { Params        } from '@angular/router'
import { SearchScopes  } from '@enums/github-scopes'
import { UserProfile   } from '@github/user/user-profile'
import   builder         from '@helpers/search-builder'
import { SharedOptions } from '@helpers/shared-options'
import { UserResult    } from '@models/user-result.dto'
import { UserSearch    } from '@models/user-search.dto'

@Injectable()
export class GithubService {
  // ======================================= //
  private _username: string;
  private _search: Dictionary = {};
  private _profile: UserProfile;
  // ======================================= //
  constructor(private options: SharedOptions, private http: HttpClient) {
    this._search = localStorage.getItem('search') ? JSON.parse(localStorage.getItem('search')) : {};
  }
  // ======================================= //
  public setSelectedUsername(login: string) {
    this._username = login;
  }
  public setSelectedProfile(profile: UserProfile) {
    this._profile = profile;
  }
  public getSelectedProfile() {
    return this._profile;
  }
  public getSelectedUsername() {
    return this._username;
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
      users.forEach((user: UserResult) => {
        if (!this._search[SearchScopes.Users].some((item: UserResult) => item.id == user.id)) {
          this.http.get<UserResult>(user.url).toPromise().then((result) => {
            this._search[SearchScopes.Users].push(result);
            this.updateStorage('search', this._search);
            emitter.next(this._search[SearchScopes.Users].slice().filter((user: UserResult) => users.some(x => x.id == user.id)));
          });
        }
        else {
          emitter.next(this._search[SearchScopes.Users].slice().filter((user: UserResult) => users.some(x => x.id == user.id)));
        }
      });
    });
  }

  private updateStorage(scope: string, value: any) {
    localStorage.setItem(scope, JSON.stringify(value));
  }
}
export interface Dictionary {
  [scope: string]: any[];
}
export interface ICollection {
  [scope: string]: Observable<any[]>;
}
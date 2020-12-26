import { tap           } from 'rxjs/operators'
import { HttpClient    } from '@angular/common/http'
import { Injectable    } from '@angular/core'
import { SearchScopes  } from '@enums/github-scopes'
import   builder         from '@helpers/search-builder'
import { SharedOptions } from '@helpers/shared-options'
import { UserResult    } from '@models/user-result.dto'
import { UserSearch    } from '@models/user-search.dto'

@Injectable()
export class GithubService {
  // ======================================= //
  private _search: Dictionary = {};
  private _result: Dictionary = {};
  // ======================================= //
  constructor(private options: SharedOptions, private http: HttpClient) { }
  // ======================================= //
  public searchUsers(query: Params) {
    return this.http.get<UserSearch>(builder()[SearchScopes.Users], { params: query })
      .pipe(tap(result => {
        if (!this._search[SearchScopes.Users])
          this._search[SearchScopes.Users] = new Array<UserResult>();
        result.items.forEach(item => this._search[SearchScopes.Users].push(item));
      }));
  }
}
export interface Dictionary {
  [scope: string]: any[];
}
export interface Params {
  [scope: string]: any;
}
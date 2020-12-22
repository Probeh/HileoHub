import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import githubSearch from '@github/github-endpoints'
import { SearchScopes } from '@github/search-scopes'
import { SharedOptions } from '@helpers/shared-options'

@Injectable()
export class GithubService {
  // ======================================= //
  constructor(private options: SharedOptions, private http: HttpClient) { }
  // ======================================= //
  public search(key: SearchScopes, value?: string): Observable<any> {
    const endpointUrl = `${githubSearch()[key]}${value ? value : ''}`;
    return this.http.get(endpointUrl);
  }
}
export interface KeyValue {
  [key: string]: string;
}

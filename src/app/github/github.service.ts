import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SearchScopes } from '@github/search-scopes'
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
  // ======================================= //
  private baseUrl: string = 'https://api.github.com';
  // ======================================= //
  constructor(private http: HttpClient) { }
  // ======================================= //
  public search(key: SearchScopes, value?: string): Observable<any> {
    return this.http.get(`${this.getEndpoint()[key]}${value ? value : ''}`);
  }

  private getEndpoint() {
    return {
      [SearchScopes.Code]: `${this.baseUrl}/search/code?q=swift`,
      [SearchScopes.Commits]: `${this.baseUrl}/search/commits/`,
      [SearchScopes.Issues]: `${this.baseUrl}/search/issues/`,
      [SearchScopes.Labels]: `${this.baseUrl}/search/labels/`,
      [SearchScopes.Repositories]: `${this.baseUrl}/search/repositories/`,
      [SearchScopes.Topics]: `${this.baseUrl}/search/topics/`,
      [SearchScopes.Users]: `${this.baseUrl}/search/users/probeh`,
    }
  }
}
export interface KeyValue {
  [key: string]: string;
}

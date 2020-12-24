import { providers    } from '@env/environment'     ;

export default function githubSearch() {
  return {
    [SearchScopes.Code        ]: `${providers.github.baseUrl}/search/code?q=`        ,
    [SearchScopes.Commits     ]: `${providers.github.baseUrl}/search/commits?q=`     ,
    [SearchScopes.Issues      ]: `${providers.github.baseUrl}/search/issues?q=`      ,
    [SearchScopes.Labels      ]: `${providers.github.baseUrl}/search/labels?q=`      ,
    [SearchScopes.Repositories]: `${providers.github.baseUrl}/search/repositories?q=`,
    [SearchScopes.Topics      ]: `${providers.github.baseUrl}/search/topics?q=`      ,
    [SearchScopes.Users       ]: `${providers.github.baseUrl}/search/users?q=`       ,
  }
}
export enum SearchScopes {
  Code         = 'code'        ,
  Commits      = 'commits'     ,
  Issues       = 'issues'      ,
  Labels       = 'labels'      ,
  Repositories = 'repositories',
  Topics       = 'topics'      ,
  Users        = 'users'       ,
}
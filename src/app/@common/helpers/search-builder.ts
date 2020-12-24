import { providers    } from '@env/environment'        ;
import { SearchScopes } from '@enums/github-endpoints';

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
import { providers    } from '@env/environment'        ;
import { SearchScopes } from '@enums/github-scopes';

export default function builder() {
  return {
    [SearchScopes.Code        ]: `${providers.github.baseUrl}/search/code`        ,
    [SearchScopes.Commits     ]: `${providers.github.baseUrl}/search/commits`     ,
    [SearchScopes.Issues      ]: `${providers.github.baseUrl}/search/issues`      ,
    [SearchScopes.Labels      ]: `${providers.github.baseUrl}/search/labels`      ,
    [SearchScopes.Repositories]: `${providers.github.baseUrl}/search/repositories`,
    [SearchScopes.Topics      ]: `${providers.github.baseUrl}/search/topics`      ,
    [SearchScopes.Users       ]: `${providers.github.baseUrl}/search/users`       ,
  }
}
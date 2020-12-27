var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"search","loadChildren":"./github/github.module#GithubModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/github/github-routing.module.ts","module":"GithubRoutingModule","children":[{"path":"","component":"GithubComponent","children":[{"path":"code","component":"CodeSearchComponent"},{"path":"commits","component":"CommitSearchComponent"},{"path":"labels","component":"LabelSearchComponent"},{"path":"packages","component":"PackageSearchComponent"},{"path":"projects","component":"RepoSearchComponent"},{"path":"projects/:id","component":"RepoResultComponent"},{"path":"topics","component":"TopicSearchComponent"},{"path":"users","component":"UserSearchComponent"},{"path":"users/:login","component":"UserResultComponent","children":[{"path":"profile","component":"UserProfileComponent"},{"path":"packages","component":"PackageSearchComponent"},{"path":"projects","component":"RepoSearchComponent"},{"path":"languages","component":"LanguageSearchComponent"},{"path":"patterns","component":"PatternSearchComponent"},{"path":"activity","component":"ActivitySearchComponent"},{"path":"**","pathMatch":"full","redirectTo":"profile"}]},{"path":"**","pathMatch":"full","redirectTo":"users"}]},{"path":"**","pathMatch":"full","redirectTo":""}],"kind":"module"}],"module":"GithubModule"}]},{"path":"**","pathMatch":"full","redirectTo":"search"}],"kind":"module"},{"name":"routes","filename":"src/app/identity/identity-routing.module.ts","module":"IdentityRoutingModule","children":[{"path":"","component":"IdentityComponent"}],"kind":"module"}]}

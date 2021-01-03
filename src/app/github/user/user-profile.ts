import { Languages  } from '@models/languages.model.dto'
import { RepoSearch } from '@models/repo-search.dto'
import { UserResult } from '@models/user-result.dto'

export class UserProfile {
  // ======================================= //
  public user     : UserResult  ;
  public repos    : RepoSearch[];
  public languages: Languages   ;
  // ======================================= //
  constructor(user: UserResult, repos?: RepoSearch[], languages?: Languages) {
    this.user      = user     ;
    this.repos     = repos    ;
    this.languages = languages;
  }
}
import { CommitResult } from '@models/commit-result.dto'
import { UserResult   } from '@models/user-result.dto'

export interface CommitSearch {
  sha          : string         ;
  node_id      : string         ;
  commit       : CommitResult   ;
  url          : string         ;
  html_url     : string         ;
  comments_url : string         ;
  author       : UserResult     ;
  committer    : UserResult     ;
  parents      : CommitSearch[] ;
}
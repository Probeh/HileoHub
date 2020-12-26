import { TreeSearch        } from '@models/search/tree.search.dto'
import { UserResult        } from '@models/search/user-result.dto'
import { VerificationModel } from '@models/verification.model'

export interface CommitResult {
  author       : UserResult       ;
  committer    : UserResult       ;
  message      : string           ;
  tree         : TreeSearch       ;
  url          : string           ;
  comment_count: number           ;
  verification : VerificationModel;
}

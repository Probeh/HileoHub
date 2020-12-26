import { GitResult as GitTree        } from '@models/git.result.dto'
import { UserResult        } from '@models/user-result.dto'
import { VerificationModel } from '@models/verification.model'

export interface CommitResult {
  author        : UserResult       ;
  committer     : UserResult       ;
  message       : string           ;
  tree          : GitTree          ;
  url           : string           ;
  comment_count : number           ;
  verification  : VerificationModel;
}

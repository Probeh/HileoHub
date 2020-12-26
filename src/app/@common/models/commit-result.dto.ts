import { VerificationModel } from '@models/verification.model'    ;
import { UserResult        } from '@models/user-result.dto';
import { GitResult        } from '@models/git.result.dto';

export interface CommitResult {
  author        : UserResult       ;
  committer     : UserResult       ;
  message       : string           ;
  tree          : GitResult        ;
  url           : string           ;
  comment_count : number           ;
  verification  : VerificationModel;
}
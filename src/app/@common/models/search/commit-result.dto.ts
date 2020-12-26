import { VerificationModel } from '@models/verification.model'    ;
import { UserResult        } from '@models/search/user-result.dto';
import { TreeSearch        } from '@models/search/tree.search.dto';

export interface CommitResult {
  author       : UserResult       ;
  committer    : UserResult       ;
  message      : string           ;
  tree         : TreeSearch       ;
  url          : string           ;
  comment_count: number           ;
  verification : VerificationModel;
}
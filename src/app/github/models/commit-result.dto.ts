import { GitResult         } from '@github/models/git.result.dto'     ;
import { Languages         } from '@github/models/languages.model.dto';
import { VerificationModel } from '@github/models/verification.model' ;

export interface CommitResult {
  // ======================================= //
  author       : Author           ;
  comment_count: number           ;
  committer    : Committer        ;
  languages    : Languages        ;
  message      : string           ;
  tree         : GitResult        ;
  url          : string           ;
  verification : VerificationModel;
  // ======================================= //
}
export interface Author {
  // ======================================= //
  date : Date  ;
  email: string;
  name : string;
  // ======================================= //
}
export interface Committer {
  // ======================================= //
  date : Date  ;
  email: string;
  name : string;
  // ======================================= //
}
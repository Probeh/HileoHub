import { GitTree           } from '@models/git.tree.dto'
import { Languages         } from '@models/languages.model.dto'
import { VerificationModel } from '@models/verification.model'

export interface CommitResult {
  author       : Author           ;
  committer    : Committer        ;
  message      : string           ;
  languages    : Languages        ;
  tree         : GitTree          ;
  url          : string           ;
  comment_count: number           ;
  verification : VerificationModel;
}
export interface Author {
  name : string;
  date : Date  ;
  email: string;
}
export interface Committer {
  name : string;
  date : Date  ;
  email: string;
}
import { GitResult } from '@models/git.result.dto';

export interface GitTree {
  sha       : string     ;
  url       : string     ;
  tree      : GitResult[];
  truncated : boolean    ;
}
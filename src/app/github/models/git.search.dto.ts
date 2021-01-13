import { GitResult } from '@github/models/git.result.dto';

export interface GitSearch {
  // ======================================= //
  mode : number                  ;
  path : string                  ;
  sha  : string                  ;
  size?: number                  ;
  tree : GitResult[]             ;
  type : string | 'blob' | 'tree';
  url  : string                  ;
  // ======================================= //
}
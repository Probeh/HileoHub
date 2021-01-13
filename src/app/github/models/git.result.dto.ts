import { GitSearch } from '@github/models/git.search.dto';

export interface GitResult {
  // ======================================= //
  sha      : string     ;
  tree     : GitSearch[];
  truncated: boolean    ;
  url      : string     ;
  // ======================================= //
}
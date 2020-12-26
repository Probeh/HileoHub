import { TreeSearch } from '@models/search/tree.search.dto';

export interface GitSearch {
  sha      : string      ;
  url      : string      ;
  tree     : TreeSearch[];
  truncated: boolean     ;
}
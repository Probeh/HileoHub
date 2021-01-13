import { GithubResult } from '@github/models/user-result.dto';

export interface GithubSearch {
  // ======================================= //
  incomplete_results : boolean          ;
  items              : Array<GithubResult>;
  total_count        : number           ;
  // ======================================= //
}
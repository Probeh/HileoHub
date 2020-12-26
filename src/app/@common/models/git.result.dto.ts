export interface GitResult {
  path : string                  ;
  mode : number                  ;
  type : string | 'blob' | 'tree';
  sha  : string                  ;
  size?: number                  ;
  url  : string                  ;
}
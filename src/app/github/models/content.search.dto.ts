export interface ContentSearch {
  // ======================================= //
  download_url?: string                 ;
  git_url      : string                 ;
  html_url     : string                 ;
  name         : string                 ;
  path         : string                 ;
  sha          : string                 ;
  size         : number                 ;
  type         : string | 'dir' | 'file';
  url          : string                 ;
  // ======================================= //
}
export interface IRouterOptions {
  // ======================================= //
  active   ?: boolean         ;
  hover    ?: boolean         ;
  pressed  ?: boolean         ;
  icon     ?: string          ;
  path      : string          ;
  children? : IRouterOptions[];
  title    ?: string          ;
  // ======================================= //
}
export class RouterOptions {
  // ======================================= //
  public active  : boolean         ;
  public hover   : boolean         ;
  public pressed : boolean         ;
  public icon    : string          ;
  public path    : string          ;
  public routes  : IRouterOptions[];
  public title   : string          ;
  // ======================================= //
  constructor(options?: IRouterOptions) {
    this.active  = options.active   ? options.active : false  ;
    this.hover   = options.hover    ? options.hover : false   ;
    this.pressed = options.pressed  ? options.pressed : false ;
    this.icon    = options.icon     ? options.icon : 'fa-code';
    this.path    = options.path                               ;
    this.routes  = options.children                           ;
    this.title   = options.title                              ;
  }
  // ======================================= //
}

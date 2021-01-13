export class SharedOptions {
  // ======================================= //
  public providers  : any[];
  public endpoints  : any[];
  public credentials: any[];
  // ======================================= //
  constructor(providers?: any[], credentials?: any[], endpoints?: any[]) {
    // ======================================= //
    this.providers   = providers  ;
    this.endpoints   = endpoints  ;
    this.credentials = credentials;
    // ======================================= //
  }
}
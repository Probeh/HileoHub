
export interface ICodeLanguage {
  // ======================================= //
  terms?: string[];
  alias?: string  ;
  image?: string  ;
  since?: Date    ;
  prior?: Date    ;
  value?: number  ;
  count?: number  ;
  total?: number  ;
  repos?: number[];
  // ======================================= //
}
export class CodeLanguage implements ICodeLanguage {
  // ======================================= //
  public terms: string[];
  public alias: string  ;
  public image: string  ;
  public since: Date    ;
  public prior: Date    ;
  public value: number  ;
  public count: number  ;
  public total: number  ;
  public repos: number[];
  // ======================================= //
  constructor(model?: ICodeLanguage) {
    this.terms = model?.terms;
    this.alias = model?.alias;
    this.image = model?.image;
    this.since = model?.since;
    this.prior = model?.prior;
    this.value = model?.value;
    this.count = model?.count;
    this.total = model?.total;
    this.repos = model?.repos;
  }
  // ======================================= //
}
export class SearchDTO<T> {
  // ======================================= //
  public total_count: number;
  public incomplete_results: boolean;
  public items: Array<T>;
  // ======================================= //
  constructor(total_count?: number, incomplete_results?: boolean, items?: Array<T>) {
    // ======================================= //
    this.total_count = total_count;
    this.incomplete_results = incomplete_results;
    this.items = items ? items : new Array<T>();
    // ======================================= //
  }
}
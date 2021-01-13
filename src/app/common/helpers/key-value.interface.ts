export interface IKeyValue<TKey, TVal> {
  // ======================================= //
  key?: TKey;
  val?: TVal;
  // ======================================= //
}
export class KeyValue<TKey, TVal> {
  // ======================================= //
  public key: TKey;
  public val: TVal;
  // ======================================= //
  constructor(model?: IKeyValue<TKey, TVal>) {
    this.key = model.key;
    this.val = model.val;
  }
  // ======================================= //
}

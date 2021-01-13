export interface IBaseModel {
  // ======================================= //
  id         ?: number ;
  name       ?: string ;
  description?: string ;
  created    ?: Date   ;
  updated    ?: Date   ;
  isActive   ?: boolean;
  // ======================================= //
}
export abstract class BaseModel {
  // ======================================= //
  public id         : number ;
  public name       : string ;
  public description: string ;
  public created    : Date   ;
  public updated    : Date   ;
  public isActive   : boolean;
  // ======================================= //
  constructor(model?: IBaseModel) {
    this.id          = model?.id         ;
    this.name        = model?.name       ;
    this.description = model?.description;
    this.isActive    = model?.isActive   ;
    this.created = model?.created ? model.created : new Date();
    this.updated = model?.updated ? model.updated : new Date();
  }
  // ======================================= //
}

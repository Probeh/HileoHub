import { BaseModel, IBaseModel } from '@models/@model'
import { IEnvironment } from '@models/environment'
import { IFramework } from '@models/framework'
import { ICodeLanguage } from '@models/language'
import { IPlatform } from '@models/platform'
import { IRepository } from '@models/repository'
import { ICloudService } from '@models/service'
import { ISoftware } from '@models/software'

export interface IKnowledge extends IBaseModel {
  // ======================================= //
  languages   ?: ICodeLanguage[];
  environments?: IEnvironment [];
  repositories?: IRepository  [];
  platforms   ?: IPlatform    [];
  services    ?: ICloudService[];
  frameworks  ?: IFramework   [];
  software    ?: ISoftware    [];
  // ======================================= //
}
export class Knowledge extends BaseModel implements IKnowledge {
  // ======================================= //
  public languages   : ICodeLanguage[];
  public environments: IEnvironment [];
  public platforms   : IPlatform    [];
  public services    : ICloudService[];
  public frameworks  : IFramework   [];
  public software    : ISoftware    [];
  public repositories: IRepository  [];
  // ======================================= //
  constructor(model?: IKnowledge) {
    super(model);
    this.languages    = model?.languages   ;
    this.environments = model?.environments;
    this.platforms    = model?.platforms   ;
    this.services     = model?.services    ;
    this.frameworks   = model?.frameworks  ;
    this.software     = model?.software    ;
    this.repositories = model?.repositories;
  }
  // ======================================= //
}

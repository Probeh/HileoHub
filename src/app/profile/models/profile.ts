import { BaseModel  , IBaseModel } from '@models/@model'
import { IContact                } from '@profile/models/contact'
import { IEducation              } from '@profile/models/education'
import { IExperience             } from '@profile/models/experience'
import { IKnowledge              } from '@profile/models/knowledge'
import { IReferences             } from '@profile/models/references'

export interface IUserProfile extends IBaseModel {
  // ======================================= //
  username   ?: string        ;
  firstname  ?: string        ;
  lastname   ?: string        ;
  avatar_url ?: string        ;
  email      ?: string        ;
  birthdate  ?: Date          ;
  gender     ?: string        ;
  contact    ?: IContact      ;
  education  ?: IEducation[]  ;
  experience ?: IExperience[] ;
  knowledge  ?: IKnowledge    ;
  connections?: IUserProfile[];
  references ?: IReferences   ;
  // ======================================= //
}
export class UserProfile<TUser extends UserProfile<TUser>> extends BaseModel implements IUserProfile {
  // ======================================= //
  public username   : string        ;
  public firstname  : string        ;
  public lastname   : string        ;
  public avatar_url : string        ;
  public birthdate  : Date          ;
  public gender     : string        ;
  public email      : string        ;
  public contact    : IContact      ;
  public education  : IEducation[]  ;
  public experience : IExperience[] ;
  public knowledge  : IKnowledge    ;
  public connections: IUserProfile[];
  public references : IReferences   ;
  // ======================================= //
  constructor(model?: IUserProfile) {
    super(model);
    this.username    = model?.username   ;
    this.firstname   = model?.firstname  ;
    this.lastname    = model?.lastname   ;
    this.avatar_url  = model?.avatar_url ;
    this.birthdate   = model?.birthdate  ;
    this.gender      = model?.gender     ;
    this.email       = model?.email      ;
    this.contact     = model?.contact    ;
    this.education   = model?.education  ;
    this.experience  = model?.experience ;
    this.knowledge   = model?.knowledge  ;
    this.connections = model?.connections;
    this.references  = model?.references ;
  }
  // ======================================= //

}
import { BaseModel   , IBaseModel  } from '@models/@model'
import { IUserProfile, UserProfile } from '@profile/models/profile'

export interface IUserAccount extends IBaseModel {
  // ======================================= //
  login   ?: string      ;
  password?: string      ;
  profile ?: IUserProfile;
  username?: string      ;
  email   ?: string      ;
  // ======================================= //
}
export class UserAccount extends BaseModel implements IUserAccount {
  // ======================================= //
  public login   : string      ;
  public password: string      ;
  public profile : IUserProfile;
  public username: string      ;
  // ======================================= //
  constructor(model?: IUserAccount) {
    super(model);
    this.login = model?.login
    this.password = model?.password;
    this.username = model?.username;
    this.profile = new UserProfile(model);
  }
  // ======================================= //
}

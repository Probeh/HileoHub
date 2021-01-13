import { IUserAccount } from '@account/models/account'
import { AuthService } from '@account/services/auth.service'
import { Injectable } from '@angular/core'
import { GithubService } from '@github/services/github.service'
import { IKeyValue } from '@helpers/key-value.interface'
import { IUserProfile } from '@profile/models/profile'

@Injectable({ providedIn: 'root' })
export class ProfileService {
  // ======================================= //
  private _user_account: IUserAccount;
  private _user_profile: IUserProfile;
  private _cached_items: IUserProfile[];
  // ======================================= //
  constructor(private auth: AuthService, private github: GithubService) {
    this._cached_items = JSON.parse(localStorage.getItem('profiles')) as IUserProfile[];
    this._user_account = JSON.parse(localStorage.getItem('account')) as IUserAccount;
    this.auth.authChanged
      .subscribe((result: IKeyValue<boolean, IUserProfile>) => this._user_profile = result.val);
  }
  // ======================================= //
  public getCurrentProfile() {
    return this._user_profile
      ? this._user_profile
      : this._cached_items?.find(x => x.email == this._user_account.email);
  }
}

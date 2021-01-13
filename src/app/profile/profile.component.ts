import { AuthService } from '@account/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { IUserProfile } from '@profile/models/profile';
import { ProfileService } from '@profile/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user_profile: IUserProfile;
  // ======================================= //
  constructor(private auth: AuthService, private profile: ProfileService) {
    this.auth.authChanged
      .subscribe(result => this.user_profile = result.val);
    this.user_profile = this.profile.getCurrentProfile();
  }
  ngOnInit() { }
  // ======================================= //
  public getUserRepos() {
    return this.user_profile?.knowledge?.repositories?.slice();
  }
  public getUserLanguages() {
    return this.user_profile?.knowledge.languages?.slice();
  }
}
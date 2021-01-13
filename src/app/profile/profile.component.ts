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
  constructor(private profile: ProfileService) { }
  ngOnInit() { this.user_profile = this.profile.getCurrentProfile(); }
  // ======================================= //
  public getUserRepos() {
    return this.user_profile?.knowledge?.repositories?.slice();
  }
  public getUserLanguages() {
    return this.user_profile?.knowledge.languages?.slice();
  }
}
import { IUserAccount } from '@account/models/account';
import { AuthService } from '@account/services/auth.service'
import { Component, OnInit } from '@angular/core'
import { IKeyValue } from '@helpers/key-value.interface';
import { SidenavService } from '@sidenav/services/sidenav.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public username: string;
  public authState: boolean = false;
  // ======================================= //
  constructor(private sidenav: SidenavService, private auth: AuthService) {
    this.auth.authChanged.subscribe(
      (result: IKeyValue<boolean, IUserAccount>) => {
        if (result.key) {
          this.username = result.val?.name;
          this.authState = result.key;
        }
      }
    );
    this.auth.getAuthState();
  }
  ngOnInit() { }
  // ======================================= //
  public toggleSidenav() {
    this.sidenav.toggleSidenav();
  }
  public fireLogin() {
    this.auth.githubLogin();
  }
  public fireLogout() {
    this.auth.githubLogout();
  }
}

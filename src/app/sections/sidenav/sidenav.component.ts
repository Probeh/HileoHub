import { AuthService } from '@account/services/auth.service'
import { Component, OnInit } from '@angular/core'
import { IKeyValue } from '@helpers/key-value.interface'
import { IRouterOptions } from '@helpers/router-options'
import { IUserProfile } from '@profile/models/profile'
import { SidenavService } from '@sidenav/services/sidenav.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  // ======================================= //
  public routes: IRouterOptions[];
  public expanded: boolean = false;
  public authState: boolean;
  // ======================================= //
  constructor(private service: SidenavService, private auth: AuthService) {
    this.auth.authChanged
      .subscribe((state: IKeyValue<boolean, IUserProfile>) => this.authState = state.key);
    this.service.onToggleSidenav
      .subscribe(state => this.expanded = state);
    this.service.routeListener
      .subscribe(routes => this.routes = routes);
    // ======================================= //
    this.authState = this.auth.isAuthenticated;
  }
  ngOnInit() { }
  // ======================================= //
  public onToggleSidenav() {
    this.service.toggleSidenav();
  }
  public onHoverSidenav(name: string) {
    this.routes.forEach(route => route.hover = route.title == name);
  }
  public onHoveredSidenav(name: string) {
    this.routes.forEach(route => route.title == name ? route.hover = false : {});
  }
}

import { Component      , OnInit } from '@angular/core'             ;
import { IdentityService         } from '@identity/identity.service';

@Component({
  selector    :  'app-identity'             ,
  templateUrl :  './identity.component.html',
  styleUrls   : ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {
  // ======================================= //
  constructor(private service: IdentityService) { }
  ngOnInit() { }
  // ======================================= //\
  public login() {
    this.service.login();
  }
  public logout() {
    this.service.logout();
  }
}

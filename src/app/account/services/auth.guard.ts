import { AuthService } from '@account/services/auth.service'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  // ======================================= //
  constructor(private service: AuthService, private router: Router) { }
  // ======================================= //

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.service.isAuthenticated) {
      if (!state.url.startsWith('/home') && state.url != '/') {
        return true;
      }
      else this.router.navigate(['/profile'])
    }
    else {
      if (state.url.startsWith('/home') && state.url != '') {
        return true;
      }
    }
    return false;
  }
}
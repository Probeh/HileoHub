import { Observable            , of      } from 'rxjs'
import { Injectable                      } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { IUserProfile                    } from '@profile/models/profile'
import { ProfileService                  } from '@profile/services/profile.service'

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<IUserProfile> {
  // ======================================= //
  constructor(private service: ProfileService) { }
  // ======================================= //
  resolve(route: ActivatedRouteSnapshot): Observable<IUserProfile> | Promise<IUserProfile> | IUserProfile {
    return of(null);
  }
}
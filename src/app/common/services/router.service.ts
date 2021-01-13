import { EventEmitter, Injectable } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { IRouterOptions } from '@helpers/router-options'

@Injectable({ providedIn: 'root' })
export class RouterService {
  // ======================================= //
  private _options: IRouterOptions[];
  public routeListener: EventEmitter<IRouterOptions[]> = new EventEmitter();
  // ======================================= //
  constructor(private router: Router, private active: ActivatedRoute) {
    this._options = [
      { path: 'profile' , title: 'profile' , icon: 'fa-address-card-o' },
      { path: 'feed'    , title: 'social'  , icon: 'fa-share-alt'      },
      { path: 'insights', title: 'insights', icon: 'fa-line-chart'     },
      { path: 'hub'     , title: 'search'  , icon: 'fa-code-fork'      },
      { path: 'account' , title: 'account' , icon: 'fa-user'           }
    ];

    this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          const baseRoute: string = event.url.split('/')[1].split('/')[0].toLowerCase();
          this._options.forEach(route => {
            if (route.path.toLowerCase() == baseRoute) {
              route.active = true;
              if (event.url.split('/')[1].split('/')[1]) {
                const childRoute: string = event.url.split('/')[1].split('/')[1].toLowerCase();
                route.children?.forEach(child => {
                  if (child.path.toLowerCase() == childRoute) {
                    child.active = true;
                  }
                  else child.active = false;
                })
              }
            }
            else route.active = false;
          });
          this.routeListener.emit(this._options.slice());
        }
      }
    })
  }
  // ======================================= //
}

import { EventEmitter, Injectable } from '@angular/core';
import { IRouterOptions } from '@helpers/router-options';
import { RouterService } from '@services/router.service';

@Injectable({ providedIn: 'root' })
export class SidenavService {
  // ======================================= //
  public routeListener: EventEmitter<IRouterOptions[]>;
  public onToggleSidenav: EventEmitter<boolean> = new EventEmitter();
  // ======================================= //
  private _visible: boolean = false;
  // ======================================= //
  constructor(private routerService: RouterService) {
    this.setOnToggleListener();
    this.routeListener = this.routerService.routeListener;
  }
  // ======================================= //
  public toggleSidenav() {
    this._visible = !this._visible;
    this.onToggleSidenav.emit(this._visible);
  }
  private setOnToggleListener() {
    let keys: KeyboardEvent[] = [];
    document.addEventListener("keydown", (keydown) => {
      if (keydown instanceof KeyboardEvent) {
        if (keys.length > 0 && !keys.some(x => x.key == keydown.key)) {
          keys.push(keydown);
          document.addEventListener("keyup", (keyup) => {
            if (keyup instanceof KeyboardEvent) {
              if (keys.some(x => x.ctrlKey && x.code == 'Space')) {
                this.toggleSidenav();
              }
              keys = [];
            }
          });
        }
        else if (keys.length == 0) keys.push(keydown);
      }
    });
  }
}

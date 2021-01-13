import { CommonModule           } from '@angular/common'
import { NgModule               } from '@angular/core'
import { PlatformsRoutingModule } from '@insights/platforms/platforms-routing.module'
import { PlatformsComponent     } from '@insights/platforms/platforms.component'

// ======================================= //
const imports    = [CommonModule          ];
const providers  = [                      ];
const modules    = [PlatformsRoutingModule];
const components = [PlatformsComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class PlatformsModule { }

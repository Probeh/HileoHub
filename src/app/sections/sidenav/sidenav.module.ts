import { CommonModule         } from '@angular/common'
import { NgModule             } from '@angular/core'
import { SidenavRoutingModule } from '@sidenav/sidenav-routing.module'
import { SidenavComponent     } from '@sidenav/sidenav.component'

// ======================================= //
const imports    = [CommonModule        ];
const providers  = [                    ];
const modules    = [SidenavRoutingModule];
const components = [SidenavComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class SidenavModule { }

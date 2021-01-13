import { CommonModule         } from '@angular/common'
import { NgModule             } from '@angular/core'
import { PrivateRoutingModule } from '@profile/private/private-routing.module'
import { PrivateComponent     } from '@profile/private/private.component'

// ======================================= //
const imports    = [CommonModule        ];
const providers  = [                    ];
const modules    = [PrivateRoutingModule];
const components = [PrivateComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class PrivateModule { }

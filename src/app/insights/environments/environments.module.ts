import { CommonModule              } from '@angular/common'
import { NgModule                  } from '@angular/core'
import { EnvironmentsRoutingModule } from '@insights/environments/environments-routing.module'
import { EnvironmentsComponent     } from '@insights/environments/environments.component'

// ======================================= //
const imports    = [CommonModule             ];
const providers  = [                         ];
const modules    = [EnvironmentsRoutingModule];
const components = [EnvironmentsComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class EnvironmentsModule { }

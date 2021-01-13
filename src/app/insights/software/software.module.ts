import { CommonModule          } from '@angular/common'
import { NgModule              } from '@angular/core'
import { SoftwareRoutingModule } from '@insights/software/software-routing.module'
import { SoftwareComponent     } from '@insights/software/software.component'

// ======================================= //
const imports    = [CommonModule          ];
const providers  = [                      ];
const modules    = [SoftwareRoutingModule ];
const components = [SoftwareComponent     ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class SoftwareModule { }

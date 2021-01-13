import { CommonModule            } from '@angular/common'
import { NgModule                } from '@angular/core'
import { FrameworksRoutingModule } from '@insights/frameworks/frameworks-routing.module'
import { FrameworksComponent     } from '@insights/frameworks/frameworks.component'

// ======================================= //
const imports    = [CommonModule           ];
const providers  = [                       ];
const modules    = [FrameworksRoutingModule];
const components = [FrameworksComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class FrameworksModule { }

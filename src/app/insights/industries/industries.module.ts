import { CommonModule            } from '@angular/common'
import { NgModule                } from '@angular/core'
import { IndustriesRoutingModule } from '@insights/industries/industries-routing.module'
import { IndustriesComponent     } from '@insights/industries/industries.component'

// ======================================= //
const imports    = [CommonModule           ];
const providers  = [                       ];
const modules    = [IndustriesRoutingModule];
const components = [IndustriesComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class IndustriesModule { }

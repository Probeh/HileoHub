import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { PublicRoutingModule } from '@profile/public/public-routing.module'
import { PublicComponent     } from '@profile/public/public.component'

// ======================================= //
const imports    = [CommonModule       ];
const providers  = [                   ];
const modules    = [PublicRoutingModule];
const components = [PublicComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class PublicModule { }

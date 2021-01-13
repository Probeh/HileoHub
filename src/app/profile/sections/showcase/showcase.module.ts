import { CommonModule          } from '@angular/common'
import { NgModule              } from '@angular/core'
import { ShowcaseRoutingModule } from '@profile/sections/showcase/showcase-routing.module'
import { ShowcaseComponent     } from '@profile/sections/showcase/showcase.component'

// ======================================= //
const imports    = [CommonModule         ];
const providers  = [                     ];
const modules    = [ShowcaseRoutingModule];
const components = [ShowcaseComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class ShowcaseModule { }

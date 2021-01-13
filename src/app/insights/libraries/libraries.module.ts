import { CommonModule           } from '@angular/common'
import { NgModule               } from '@angular/core'
import { LibrariesRoutingModule } from '@insights/libraries/libraries-routing.module'
import { LibrariesComponent     } from '@insights/libraries/libraries.component'

// ======================================= //
const imports    = [CommonModule          ];
const providers  = [                      ];
const modules    = [LibrariesRoutingModule];
const components = [LibrariesComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class LibrariesModule { }

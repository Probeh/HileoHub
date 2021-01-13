import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { SearchRoutingModule } from '@search/search-routing.module'
import { SearchComponent     } from '@search/search.component'

// ======================================= //
const imports    = [CommonModule       ];
const providers  = [                   ];
const modules    = [SearchRoutingModule];
const components = [SearchComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class SearchModule { }

import { CommonModule            } from '@angular/common'
import { NgModule                } from '@angular/core'
import { RepositoryRoutingModule } from '@insights/repositories/repository/repository-routing.module'
import { RepositoryComponent     } from '@insights/repositories/repository/repository.component'

// ======================================= //
const imports    = [CommonModule           ];
const providers  = [                       ];
const modules    = [RepositoryRoutingModule];
const components = [RepositoryComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class RepositoryModule { }

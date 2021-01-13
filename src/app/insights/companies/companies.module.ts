import { CommonModule           } from '@angular/common'
import { NgModule               } from '@angular/core'
import { CompaniesRoutingModule } from '@insights/companies/companies-routing.module'
import { CompaniesComponent     } from '@insights/companies/companies.component'

// ======================================= //
const imports    = [CommonModule          ];
const providers  = [                      ];
const modules    = [CompaniesRoutingModule];
const components = [CompaniesComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class CompaniesModule { }

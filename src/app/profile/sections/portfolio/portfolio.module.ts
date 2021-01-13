import { CommonModule           } from '@angular/common'
import { NgModule               } from '@angular/core'
import { PortfolioRoutingModule } from '@profile/sections/portfolio/portfolio-routing.module'
import { PortfolioComponent     } from '@profile/sections/portfolio/portfolio.component'     ;

// ======================================= //
const imports    = [CommonModule          ];
const providers  = [                      ];
const modules    = [PortfolioRoutingModule];
const components = [PortfolioComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class PortfolioModule { }

import { CommonModule          } from '@angular/common'
import { NgModule              } from '@angular/core'
import { InsightsRoutingModule } from '@insights/insights-routing.module';
import { InsightsComponent     } from '@insights/insights.component'      ;

// ======================================= //
const imports    = [CommonModule         ];
const providers  = [                     ];
const modules    = [InsightsRoutingModule];
const components = [InsightsComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports      : [imports    , modules],
  declarations :  components,
  providers    :  providers  ,
  exports      : [components, modules]
  // ======================================= //
})
export class InsightsModule { }

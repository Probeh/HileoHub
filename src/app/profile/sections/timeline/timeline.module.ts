import { CommonModule          } from '@angular/common'
import { NgModule              } from '@angular/core'
import { TimelineRoutingModule } from '@profile/sections/timeline/timeline-routing.module'
import { TimelineComponent     } from '@profile/sections/timeline/timeline.component'

// ======================================= //
const imports    = [CommonModule         ];
const providers  = [                     ];
const modules    = [TimelineRoutingModule];
const components = [TimelineComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class TimelineModule { }

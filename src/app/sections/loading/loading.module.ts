import { CommonModule         } from '@angular/common'                ;
import { NgModule             } from '@angular/core'                  ;
import { LoadingRoutingModule } from '@loading/loading-routing.module';
import { LoadingComponent     } from '@loading/loading.component'     ;

// ======================================= //
const imports    = [CommonModule        ];
const providers  = [                    ];
const modules    = [LoadingRoutingModule];
const components = [LoadingComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class LoadingModule { }

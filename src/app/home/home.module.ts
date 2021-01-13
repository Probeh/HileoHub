import { CommonModule      } from '@angular/common'
import { NgModule          } from '@angular/core'
import { HomeRoutingModule } from '@app/home/home-routing.module'
import { HomeComponent     } from '@app/home/home.component'

// ======================================= //
const imports    = [CommonModule     ];
const providers  = [                 ];
const modules    = [HomeRoutingModule];
const components = [HomeComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class HomeModule { }

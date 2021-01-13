import { RegisterRoutingModule } from '@account/register/register-routing.module'
import { RegisterComponent     } from '@account/register/register.component'
import { CommonModule          } from '@angular/common'
import { NgModule              } from '@angular/core'

// ======================================= //
const imports    = [CommonModule         ];
const providers  = [                     ];
const modules    = [RegisterRoutingModule];
const components = [RegisterComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class RegisterModule { }

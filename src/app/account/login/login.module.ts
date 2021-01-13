import { LoginRoutingModule } from '@account/login/login-routing.module'
import { LoginComponent     } from '@account/login/login.component'
import { CommonModule       } from '@angular/common'
import { NgModule           } from '@angular/core'

// ======================================= //
const imports    = [CommonModule      ];
const providers  = [                  ];
const modules    = [LoginRoutingModule];
const components = [LoginComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class LoginModule { }

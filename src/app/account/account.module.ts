import { AccountRoutingModule } from '@account/account-routing.module'
import { AccountComponent     } from '@account/account.component'
import { CommonModule         } from '@angular/common'
import { NgModule             } from '@angular/core'

// ======================================= //
const imports    = [CommonModule        ];
const providers  = [                    ];
const modules    = [AccountRoutingModule];
const components = [AccountComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class AccountModule { }

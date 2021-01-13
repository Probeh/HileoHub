import { CommonModule         } from '@angular/common'
import { NgModule             } from '@angular/core'
import { ProfileRoutingModule } from '@profile/profile-routing.module'
import { ProfileComponent     } from '@profile/profile.component'

// ======================================= //
const imports    = [CommonModule        ];
const providers  = [                    ];
const modules    = [ProfileRoutingModule];
const components = [ProfileComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class ProfileModule { }

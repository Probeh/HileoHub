import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { SocialRoutingModule } from '@social/social-routing.module'
import { SocialComponent     } from '@social/social.component'

// ======================================= //
const imports    = [CommonModule       ];
const providers  = [                   ];
const modules    = [SocialRoutingModule];
const components = [SocialComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class SocialModule { }

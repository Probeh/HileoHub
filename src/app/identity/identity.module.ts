import { CommonModule          } from '@angular/common'
import { NgModule              } from '@angular/core'
import { IdentityRoutingModule } from '@identity/identity-routing.module'
import { IdentityService       } from '@identity/identity.service'
import { IdentityComponent     } from './identity.component'

// ======================================= //
@NgModule({
  imports: [
    CommonModule,
    IdentityRoutingModule,
  ],
  declarations: [IdentityComponent],
  providers   : [IdentityService  ],
  exports     : [IdentityComponent],
})
// ======================================= //
export class IdentityModule { }

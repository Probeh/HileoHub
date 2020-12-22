import { CommonModule          } from '@angular/common'
import { NgModule              } from '@angular/core'
import { AngularFireModule     } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { providers             } from '@env/environment'
import { IdentityRoutingModule } from '@identity/identity-routing.module'
import { IdentityService       } from '@identity/identity.service'
import { IdentityComponent     } from './identity.component'

// ======================================= //
@NgModule({
  imports: [
    CommonModule,
    IdentityRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(providers.firebase),
  ],
  declarations: [IdentityComponent],
  providers   : [IdentityService  ],
  exports     : [IdentityComponent],
})
// ======================================= //
export class IdentityModule { }

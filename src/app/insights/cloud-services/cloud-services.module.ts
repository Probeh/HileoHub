import { CommonModule               } from '@angular/common'
import { NgModule                   } from '@angular/core'
import { CloudServicesRoutingModule } from '@insights/cloud-services/cloud-services-routing.module'
import { CloudServicesComponent     } from '@insights/cloud-services/cloud-services.component'

// ======================================= //
const imports    = [CommonModule              ];
const providers  = [                          ];
const modules    = [CloudServicesRoutingModule];
const components = [CloudServicesComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class CloudServicesModule { }

import { CommonModule       } from '@angular/common'
import { ModuleWithProviders, NgModule           } from '@angular/core'
import { SharedOptions } from '@helpers/shared-options';
import { LabelComponent     } from '@resources/label/label.component'
import { ResourcesComponent } from '@resources/resources.component'

// ======================================= //
const imports    = [CommonModule                      ];
const providers  = [                                  ];
const components = [ResourcesComponent, LabelComponent];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   ],
  declarations:  components,
  providers   :  providers ,
  exports     : [components]
  // ======================================= //
})
export class ResourcesModule {
  static forRoot(config?: SharedOptions): ModuleWithProviders<ResourcesModule> {
    return {
      ngModule: ResourcesModule,
      providers: [
        { provide: ResourcesModule, useValue: config }
      ]
    };
  }
 }

import { CommonModule } from '@angular/common'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { SharedOptions } from '@helpers/shared-options'

// ======================================= //
const imports = [CommonModule];
const providers = [];
const modules = [];
const components = [];
// ======================================= //
@NgModule({
  // ======================================= //
  imports: [imports, modules],
  declarations: components,
  providers: providers,
  exports: [components, modules]
  // ======================================= //
})
export class SharedModule {
  static forRoot(config?: SharedOptions): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: SharedOptions, useValue: config }
      ]
    };
  }
}

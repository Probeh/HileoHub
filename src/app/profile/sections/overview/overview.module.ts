import { ChartModule } from 'primeng/chart'
import { KnobModule } from 'primeng/knob'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { OverviewRoutingModule } from '@profile/sections/overview/overview-routing.module'
import { OverviewComponent } from '@profile/sections/overview/overview.component'
import { RepositoriesModule } from '@insights/repositories/repositories.module'

// ======================================= //
const imports = [CommonModule, ChartModule, KnobModule, FormsModule];
const providers = [];
const modules = [OverviewRoutingModule,RepositoriesModule];
const components = [OverviewComponent];
// ======================================= //
@NgModule({
  // ======================================= //
  imports: [imports, modules],
  declarations: components,
  providers: providers,
  exports: [components, modules]
  // ======================================= //
})
export class OverviewModule { }

import { BadgeModule } from 'primeng/badge'
import { ButtonModule } from 'primeng/button'
import { RatingModule } from 'primeng/rating'
import { RippleModule } from 'primeng/ripple'
import { TableModule } from 'primeng/table'
import { TreeTableModule } from 'primeng/treetable'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RepositoriesRoutingModule } from '@insights/repositories/repositories-routing.module'
import { RepositoriesComponent } from '@insights/repositories/repositories.component'
import { RepositoryChartComponent } from '@insights/repositories/repository-chart/repository-chart.component'
import { RepositoryListComponent } from '@insights/repositories/repository-list/repository-list.component'
import { RepositoryResultComponent } from '@insights/repositories/repository-result/repository-result.component'
import { RepositoryModule } from '@insights/repositories/repository/repository.module'

// ======================================= //
const imports = [CommonModule, TableModule, BadgeModule, RatingModule, FormsModule, ButtonModule, RippleModule, TreeTableModule, FormsModule];
const providers = [];
const modules = [RepositoriesRoutingModule, RepositoryModule];
const components = [RepositoriesComponent, RepositoryResultComponent, RepositoryListComponent, RepositoryChartComponent];
// ======================================= //
@NgModule({
  // ======================================= //
  imports: [imports, modules],
  declarations: components,
  providers: providers,
  exports: [components, modules]
  // ======================================= //
})
export class RepositoriesModule { }

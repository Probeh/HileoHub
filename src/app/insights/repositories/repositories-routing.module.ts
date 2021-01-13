import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RepositoriesComponent } from '@insights/repositories/repositories.component'
import { RepositoryListComponent } from '@insights/repositories/repository-list/repository-list.component';

// ======================================= //
const routes: Routes = [
  {
    path: '', component: RepositoriesComponent, children: [
      { path: '', component: RepositoryListComponent },
    ]
  }
];
// ======================================= //

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }

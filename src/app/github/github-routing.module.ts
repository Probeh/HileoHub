import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GithubComponent } from '@github/github.component'
import { RepoComponent } from '@github/repo/repo.component';
import { SearchComponent } from '@github/search/search.component'
import { UserComponent } from '@github/user/user.component';

// ======================================= //
const routes: Routes = [
  {
    path: '', component: GithubComponent, children: [
      { path: '', component: SearchComponent },
      { path: 'user', component: UserComponent },
      { path: 'repo', component: RepoComponent },
      { path: 'code', component: RepoComponent },
      { path: 'project', component: RepoComponent },
      { path: 'package', component: RepoComponent },
    ]
  },
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// ======================================= //
export class GithubRoutingModule { }

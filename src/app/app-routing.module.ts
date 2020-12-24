import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// ======================================= //
const routes: Routes = [
  { path: 'search', loadChildren: () => import('./github/github.module').then(m => m.GithubModule) },
  { path: 'package', loadChildren: () => import('./package/package.module').then(m => m.PackageModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'search' }
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  // ======================================= //
export class AppRoutingModule { }

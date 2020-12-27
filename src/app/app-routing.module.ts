import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// ======================================= //
const routes: Routes = [
  { path: 'search', loadChildren: () => import('./github/github.module').then(m => m.GithubModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'search' }
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  // ======================================= //
export class AppRoutingModule { }

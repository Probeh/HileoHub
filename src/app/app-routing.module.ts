import { NgModule              } from '@angular/core'
import { RouterModule , Routes } from '@angular/router'
import { HomeComponent         } from '@app/home/home.component'

// ======================================= //
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./identity/identity.module').then(m => m.IdentityModule) },
  { path: 'hub', loadChildren: () => import('./github/github.module').then(m => m.GithubModule) },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'hub' },
  { path: '**', pathMatch: 'full', redirectTo: 'hub' }
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  // ======================================= //
export class AppRoutingModule { }

import { AuthGuard            } from '@account/services/auth.guard'
import { NgModule             } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// ======================================= //
const routes: Routes = [
  { path: 'account' , loadChildren: () => import('./account/account.module'  ).then(m => m.AccountModule )                           },
  { path: 'home'    , loadChildren: () => import('./home/home.module'        ).then(m => m.HomeModule    ), canActivate: [AuthGuard] },
  { path: 'hub'     , loadChildren: () => import('./search/search.module'    ).then(m => m.SearchModule  ), canActivate: [AuthGuard] },
  { path: 'insights', loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule), canActivate: [AuthGuard] },
  { path: 'feed'    , loadChildren: () => import('./social/social.module'    ).then(m => m.SocialModule  ), canActivate: [AuthGuard] },
  { path: ''        , loadChildren: () => import('./profile/profile.module'  ).then(m => m.ProfileModule )                           },
  { path: '**', pathMatch: 'full', redirectTo: 'hub' }
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { AuthGuard                } from '@account/services/auth.guard'
import { NgModule                 } from '@angular/core'
import { RouterModule    , Routes } from '@angular/router'
import { ProfileComponent         } from '@profile/profile.component'  ;

// ======================================= //
const children: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      { path: 'environments', loadChildren: () => import('../insights/environments/environments.module').then(m => m.EnvironmentsModule) },
      { path: 'frameworks'  , loadChildren: () => import('../insights/frameworks/frameworks.module'    ).then(m => m.FrameworksModule  ) },
      { path: 'languages'   , loadChildren: () => import('../insights/languages/languages.module'      ).then(m => m.LanguagesModule   ) },
      { path: 'libraries'   , loadChildren: () => import('../insights/libraries/libraries.module'      ).then(m => m.LibrariesModule   ) },
      { path: 'platforms'   , loadChildren: () => import('../insights/platforms/platforms.module'      ).then(m => m.PlatformsModule   ) },
      { path: 'repositories', loadChildren: () => import('../insights/repositories/repositories.module').then(m => m.RepositoriesModule) },
      { path: 'overview'    , loadChildren: () => import('./sections/overview/overview.module'         ).then(m => m.OverviewModule    ) },
      { path: 'timeline'    , loadChildren: () => import('./sections/timeline/timeline.module'         ).then(m => m.TimelineModule    ) },
      { path: '**', 'pathMatch': 'full', redirectTo: 'overview' }
    ]
  }
];
// ======================================= //
const routes: Routes = [
  { path: 'profile', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule), canActivate: [AuthGuard], children: children },
  { path: ':userid', loadChildren: () => import('./public/public.module').then(m => m.PublicModule), children: children },
  { path: '**', 'pathMatch': 'full', redirectTo: 'profile' }
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

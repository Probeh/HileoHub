import { NgModule                  } from '@angular/core'
import { RouterModule     , Routes } from '@angular/router'
import { InsightsComponent         } from '@insights/insights.component'

// ======================================= //
const routes: Routes = [
  {
    path: '', component: InsightsComponent, children: [
      { path: 'companies'    , loadChildren: () => import('./companies/companies.module'           ).then(m => m.CompaniesModule     ) },
      { path: 'environments' , loadChildren: () => import('./environments/environments.module'     ).then(m => m.EnvironmentsModule  ) },
      { path: 'frameworks'   , loadChildren: () => import('./frameworks/frameworks.module'         ).then(m => m.FrameworksModule    ) },
      { path: 'industries'   , loadChildren: () => import('./industries/industries.module'         ).then(m => m.IndustriesModule    ) },
      { path: 'languages'    , loadChildren: () => import('./languages/languages.module'           ).then(m => m.LanguagesModule     ) },
      { path: 'libraries'    , loadChildren: () => import('./libraries/libraries.module'           ).then(m => m.LibrariesModule     ) },
      { path: 'platforms'    , loadChildren: () => import('./platforms/platforms.module'           ).then(m => m.PlatformsModule     ) },
      { path: 'services'     , loadChildren: () => import('./cloud-services/cloud-services.module' ).then(m => m.CloudServicesModule ) },
      { path: 'software'     , loadChildren: () => import('./software/software.module'             ).then(m => m.SoftwareModule      ) },
      { path: 'repositories' , loadChildren: () => import('./repositories/repositories.module'     ).then(m => m.RepositoriesModule  ) },
    ]
  }
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsRoutingModule { }

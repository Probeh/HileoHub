import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ActivitySearchComponent } from '@github/activity/activity-search/activity-search.component'
import { CodeSearchComponent } from '@github/code/code-search/code-search.component'
import { CommitSearchComponent } from '@github/commit/commit-search/commit-search.component'
import { GithubComponent } from '@github/github.component'
import { LabelSearchComponent } from '@github/label-search/label-search.component'
import { LanguageSearchComponent } from '@github/language/language-search/language-search.component'
import { PackageSearchComponent } from '@github/package/package-search/package-search.component'
import { PatternSearchComponent } from '@github/pattern/pattern-search/pattern-search.component'
import { RepoResultComponent } from '@github/repository/repo-result/repo-result.component'
import { RepoSearchComponent } from '@github/repository/repo-search/repo-search.component'
import { TopicSearchComponent } from '@github/topic/topic-search/topic-search.component'
import { UserProfileComponent } from '@github/user/user-profile/user-profile.component'
import { UserResultComponent } from '@github/user/user-result/user-result.component'
import { UserSearchComponent } from '@github/user/user-search/user-search.component'

// ======================================= //
const routes: Routes = [
  {
    path: '', component: GithubComponent, children: [
      { path: 'code'        , component: CodeSearchComponent    },
      { path: 'commits'     , component: CommitSearchComponent  },
      { path: 'labels'      , component: LabelSearchComponent   },
      { path: 'packages'    , component: PackageSearchComponent },
      { path: 'projects'    , component: RepoSearchComponent    },
      { path: 'projects/:id', component: RepoResultComponent    },
      { path: 'topics'      , component: TopicSearchComponent   },
      { path: 'users'       , component: UserSearchComponent    },
      {
        path: 'users/:login', component: UserResultComponent, children: [
          { path: 'profile'   , component: UserProfileComponent    },
          { path: 'packages'  , component: PackageSearchComponent  },
          { path: 'projects'  , component: RepoSearchComponent     },
          { path: 'languages' , component: LanguageSearchComponent },
          { path: 'patterns'  , component: PatternSearchComponent  },
          { path: 'activity'  , component: ActivitySearchComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'profile' }
        ]
      },
      { path: '**', pathMatch: 'full', redirectTo: 'users' },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// ======================================= //
export class GithubRoutingModule { }

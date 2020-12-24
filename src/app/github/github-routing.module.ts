import { NgModule                       } from '@angular/core'
import { RouterModule          , Routes } from '@angular/router'
import { CodeSearchComponent            } from '@github/code-search/code-search.component'
import { CommitSearchComponent          } from '@github/commit-search/commit-search.component'
import { GithubComponent                } from '@github/github.component'
import { LabelSearchComponent           } from '@github/label-search/label-search.component'
import { PackageSearchComponent         } from '@github/package-search/package-search.component'
import { ProjectResultComponent         } from '@github/project-result/project-result.component'
import { ProjectSearchComponent         } from '@github/project-search/project-search.component'
import { RepoSearchComponent            } from '@github/repo-search/repo-search.component'
import { TopicSearchComponent           } from '@github/topic-search/topic-search.component'
import { UserSearchComponent            } from '@github/user-search/user-search.component'

// ======================================= //
const routes: Routes = [
  {
    path: '', component: GithubComponent, children: [
      { path: 'code'        , component: CodeSearchComponent    },
      { path: 'commits'     , component: CommitSearchComponent  },
      { path: 'issues'      , component: ProjectResultComponent },
      { path: 'labels'      , component: LabelSearchComponent   },
      { path: 'packages'    , component: PackageSearchComponent },
      { path: 'projects'    , component: ProjectSearchComponent },
      { path: 'repositories', component: RepoSearchComponent    },
      { path: 'topics'      , component: TopicSearchComponent   },
      { path: 'users'       , component: UserSearchComponent    },
      { path: '**', pathMatch: 'full', redirectTo: 'users' },
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

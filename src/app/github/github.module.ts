import { CommonModule                                } from '@angular/common'
import { NgModule                                    } from '@angular/core'
import { FormsModule           , ReactiveFormsModule } from '@angular/forms'
import { CodeResultComponent                         } from '@github/code-result/code-result.component'
import { GithubRoutingModule                         } from '@github/github-routing.module'
import { GithubComponent                             } from '@github/github.component'
import { PackageResultComponent                      } from '@github/package-result/package-result.component'
import { ProjectResultComponent                      } from '@github/project-result/project-result.component'
import { RepoResultComponent                         } from '@github/repo-result/repo-result.component'
import { UserResultComponent                         } from '@github/user-result/user-result.component'

// ======================================= //
const components = [GithubComponent, PackageResultComponent, RepoResultComponent, ProjectResultComponent, UserResultComponent, CodeResultComponent]
// ======================================= //
@NgModule({
  imports: [CommonModule, GithubRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: components,
  exports: components
})
// ======================================= //
export class GithubModule { }

import { CommonModule                             } from '@angular/common'
import { NgModule                                 } from '@angular/core'
import { FormsModule        , ReactiveFormsModule } from '@angular/forms'
import { CodeComponent                            } from '@github/code/code.component'
import { GithubRoutingModule                      } from '@github/github-routing.module'
import { GithubComponent                          } from '@github/github.component'
import { ProjectComponent                         } from '@github/project/project.component'
import { RepoComponent                            } from '@github/repo/repo.component'
import { SearchComponent                          } from '@github/search/search.component'
import { UserComponent                            } from '@github/user/user.component'

// ======================================= //
const components = [GithubComponent, SearchComponent, RepoComponent, ProjectComponent, UserComponent, CodeComponent]
// ======================================= //
@NgModule({
  imports     : [CommonModule, GithubRoutingModule, FormsModule, ReactiveFormsModule],
  declarations:  components  ,
  exports     :  components
})
// ======================================= //
export class GithubModule { }

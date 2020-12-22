import { CommonModule                             } from '@angular/common'
import { NgModule                                 } from '@angular/core'
import { FormsModule        , ReactiveFormsModule } from '@angular/forms'
import { CodeComponent                            } from '@github/code/code.component'
import { GithubRoutingModule                      } from '@github/github-routing.module'
import { GithubComponent                          } from '@github/github.component'
import { ProjectsComponent                        } from '@github/projects/projects.component'
import { ReposComponent                           } from '@github/repos/repos.component'
import { SearchComponent                          } from '@github/search/search.component'
import { UsersComponent                           } from '@github/users/users.component'

// ======================================= //
const components = [GithubComponent, SearchComponent, ReposComponent, ProjectsComponent, UsersComponent, CodeComponent]
// ======================================= //
@NgModule({
  imports      : [CommonModule, GithubRoutingModule, FormsModule, ReactiveFormsModule],
  declarations :  components  ,
  exports      :  components
})
// ======================================= //
export class GithubModule { }

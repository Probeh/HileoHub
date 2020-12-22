import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { GithubRoutingModule } from '@github/github-routing.module'
import { GithubComponent     } from '@github/github.component'

// ======================================= //
@NgModule({
  imports     : [CommonModule   , GithubRoutingModule, ReactiveFormsModule],
  declarations: [GithubComponent                                          ],
  exports     : [GithubComponent                                          ]
})
// ======================================= //
export class GithubModule { }

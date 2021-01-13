import { CommonModule        } from '@angular/common'
import { NgModule            } from '@angular/core'
import { ResumeRoutingModule } from '@profile/sections/resume/resume-routing.module'
import { ResumeComponent     } from '@profile/sections/resume/resume.component'

// ======================================= //
const imports    = [CommonModule       ];
const providers  = [                   ];
const modules    = [ResumeRoutingModule];
const components = [ResumeComponent    ];
// ======================================= //
@NgModule({
  // ======================================= //
  imports     : [imports   , modules],
  declarations:  components,
  providers   :  providers ,
  exports     : [components, modules]
  // ======================================= //
})
export class ResumeModule { }

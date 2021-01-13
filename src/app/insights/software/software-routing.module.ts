import { NgModule                  } from '@angular/core'
import { RouterModule     , Routes } from '@angular/router'
import { SoftwareComponent         } from '@insights/software/software.component'

// ======================================= //
const routes: Routes = [
  { path: '', component: SoftwareComponent }
];
// ======================================= //

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }

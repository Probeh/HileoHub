import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PublicComponent } from '@profile/public/public.component'

// ======================================= //
const routes: Routes = [
  { path: '', component: PublicComponent }
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvironmentsComponent } from '@insights/environments/environments.component';

// ======================================= //
const routes: Routes = [
  { path: '', component: EnvironmentsComponent }
];
// ======================================= //

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvironmentsRoutingModule { }

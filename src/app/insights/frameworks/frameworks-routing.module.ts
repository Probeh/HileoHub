import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameworksComponent } from '@insights/frameworks/frameworks.component';

// ======================================= //
const routes: Routes = [
  { path: '', component: FrameworksComponent }
];
// ======================================= //

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworksRoutingModule { }

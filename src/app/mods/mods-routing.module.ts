import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulsHomeComponent } from './moduls-home/moduls-home.component';

const routes: Routes = [
  {path:'', component:ModulsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementHomeComponent } from './element-home/element-home.component';

const routes: Routes = [
    {path: 'elements', component: ElementHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ElementRoutingModule { }

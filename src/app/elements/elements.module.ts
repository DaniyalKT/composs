import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementHomeComponent } from './element-home/element-home.component';
import { ElementRoutingModule } from './element-routing.module';



@NgModule({
  declarations: [
    ElementHomeComponent
  ],
  imports: [
    CommonModule,
    ElementRoutingModule
  ]
})
export class ElementsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementHomeComponent } from './element-home/element-home.component';



@NgModule({
  declarations: [
    ElementHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ElementHomeComponent]
})
export class ElementsModule { }

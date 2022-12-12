import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementHomeComponent } from './element-home/element-home.component';
import { ElementRoutingModule } from './element-routing.module';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { RepeatTemplateDirective } from './repeat-template.directive';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ElementHomeComponent,
    PlaceHolderComponent,
    RepeatTemplateDirective
  ],
  imports: [
    CommonModule,
    ElementRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }

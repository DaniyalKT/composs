import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementHomeComponent } from './element-home/element-home.component';
import { ElementRoutingModule } from './element-routing.module';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { RepeatTemplateDirective } from './repeat-template.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';



@NgModule({
  declarations: [
    ElementHomeComponent,
    PlaceHolderComponent,
    RepeatTemplateDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionHomeComponent } from './collection-home/collection-home.component';



@NgModule({
  declarations: [
    CollectionHomeComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[CollectionHomeComponent]
})
export class CollectionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CollectionRoutingModule } from './collection-routing.module';



@NgModule({
  declarations: [
    CollectionHomeComponent
  ], 
  imports: [
    CommonModule,
    CollectionRoutingModule
  ] 
})
export class CollectionsModule { }

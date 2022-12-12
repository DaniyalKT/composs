import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CollectionHomeComponent,
    TableComponent
  ], 
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ] 
})
export class CollectionsModule { }

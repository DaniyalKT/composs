import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographComponent } from './biograph/biograph.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';



@NgModule({
  declarations: [
    CollectionHomeComponent,
    TableComponent,
    BiographComponent,
    CompaniesComponent,
    PartnersComponent
  ], 
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ] 
})
export class CollectionsModule { }

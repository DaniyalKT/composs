import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographComponent } from './biograph/biograph.component';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '', component: CollectionHomeComponent,
    children: [
      {path: '' , component: BiographComponent},
      {path:'companies', component:CompaniesComponent},
      {path:'partners', component:PartnersComponent}
    ]
    
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }

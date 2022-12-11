//packages
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modules and components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from './elements/elements.module';
import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,  
    CollectionsModule,
    ModsModule, 
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

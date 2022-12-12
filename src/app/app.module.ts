//packages
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modules and components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ModsModule, 
    ViewsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

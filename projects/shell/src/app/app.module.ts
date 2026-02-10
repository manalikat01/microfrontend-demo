import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'projects/mfe-search/src/app/home/home.component';
import { HomeComponent  as ListComponent } from 'projects/mfe-list/src/app/home/home.component';
import { HomeComponent  as FetchedDetailsComponent } from 'projects/mfe-fetched-details/src/app/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FetchedDetailsComponent,
    
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

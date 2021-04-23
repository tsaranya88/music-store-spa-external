import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MsOrdersWrapperComponent} from "./ms-orders-wrapper/ms-orders-wrapper.component";
import {HttpClientModule} from "@angular/common/http";
import {MsAlbumsWrapperComponent} from "./ms-albums-wrapper/ms-albums-wrapper.component";
import {MsEventsWrapperComponent} from "./ms-events-wrapper/ms-events-wrapper.component";

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      MsOrdersWrapperComponent,
      MsAlbumsWrapperComponent,
      MsEventsWrapperComponent
   ],
   imports: [
     BrowserModule,
     HttpClientModule,
     RouterModule.forRoot([
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        { path: 'home', component: HomeComponent },
        { path: 'orders', component: MsOrdersWrapperComponent },
        { path: 'albums', component: MsAlbumsWrapperComponent },
        { path: 'events', component: MsEventsWrapperComponent },
     ])
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

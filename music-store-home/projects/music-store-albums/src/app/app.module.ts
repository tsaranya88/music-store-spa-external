import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {PreOrdersComponent} from "./pre-orders/pre-orders.component";
import {AlbumsComponent} from "./albums/albums.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'albums'},
      { path: 'albums', component: AlbumsComponent },
      {
        path: 'albums', children: [
          { path: 'pre-orders', component: PreOrdersComponent }
        ]
      }
    ]),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    PreOrdersComponent,
    AlbumsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppFlexLayoutModule } from './app-flex-layout.module';
import { AppComponent } from './app.component';
import { BillModule } from './bill/bill.module';
import { ChoreModule } from './chore/chore.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFlexLayoutModule,
    HomeModule,
    ChoreModule,
    BillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

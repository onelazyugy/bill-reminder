import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppAngularMaterialModule } from './app-angular-material.module';
import { AppFlexLayoutModule } from './app-flex-layout.module';
import { AppComponent } from './app.component';
import { BillModule } from './bill/bill.module';
import { ChoreModule } from './chore/chore.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { NextModule } from './next/next.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAngularMaterialModule,
    AppFlexLayoutModule,
    HomeModule,
    ChoreModule,
    BillModule,
    ProfileModule,
    NextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

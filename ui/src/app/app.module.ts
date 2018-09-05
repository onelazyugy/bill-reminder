import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppAngularMaterialModule } from './app-angular-material.module';
import { AppFlexLayoutModule } from './app-flex-layout.module';
import { AppComponent } from './app.component';
import { BillModule } from './bill/bill.module';
import { ChoreModule } from './chore/chore.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SettingModule } from './setting/setting.module';
import { HuniTodoModule } from './huni-todo/huni-todo.module'
import { ShareModule } from './share/share.module';
import { BillService } from './bill/service/bill.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppAngularMaterialModule,
    AppFlexLayoutModule,
    ShareModule,
    HomeModule,
    ChoreModule,
    BillModule,
    SettingModule,
    HuniTodoModule
  ],
  providers: [BillService],
  bootstrap: [AppComponent]
})
export class AppModule { }

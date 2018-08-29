import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { AppFlexLayoutModule } from '../app-flex-layout.module';
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        AppAngularMaterialModule,
        AppFlexLayoutModule,
        ShareModule
    ]
})
export class HomeModule {}

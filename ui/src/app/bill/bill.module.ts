import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill.component';
import { RouterModule } from '@angular/router';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { AppFlexLayoutModule } from '../app-flex-layout.module';
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations: [BillComponent],
    imports: [
        CommonModule,
        RouterModule,
        AppAngularMaterialModule,
        AppFlexLayoutModule,
        ShareModule
    ]
})
export class BillModule {}

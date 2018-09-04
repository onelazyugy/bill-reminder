import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BillComponent } from './bill.component';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { AppFlexLayoutModule } from '../app-flex-layout.module';
import { ShareModule } from '../share/share.module';
import { AddBillForm } from './form/add-bill/add-bill.component';
import { AvailableBill } from './form/available-bill/available-bill.component';


@NgModule({
    declarations: [
        BillComponent,
        AddBillForm,
        AvailableBill
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AppAngularMaterialModule,
        AppFlexLayoutModule,
        ShareModule
    ]
})
export class BillModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { AppAngularMaterialModule } from '../../app-angular-material.module';
import { AppFlexLayoutModule } from '../../app-flex-layout.module';
import { SettingChoreMenuItem } from './chores/setting-chore-menu-item.component';
import { SettingBillMenuItem } from './bill/setting-bill-menu-item.component';

@NgModule({
    declarations: [
        SettingChoreMenuItem,
        SettingBillMenuItem
    ],
    imports: [
        CommonModule,
        ShareModule,
        AppAngularMaterialModule,
        AppFlexLayoutModule
    ],
    exports: [
        SettingChoreMenuItem,
        SettingBillMenuItem
    ]
})
export class SettingMenuItemModule {}
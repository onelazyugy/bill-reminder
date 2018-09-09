import { NgModule } from '@angular/core';
import { SettingComponent } from './setting.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { AppAngularMaterialModule } from '../app-angular-material.module';
import { AppFlexLayoutModule } from '../app-flex-layout.module';
import { SettingMenuItemModule } from './menu-item/setting-menu-item.module';

@NgModule({
    declarations: [
        SettingComponent,
    ],
    imports: [
        CommonModule,
        ShareModule,
        AppAngularMaterialModule,
        AppFlexLayoutModule,
        SettingMenuItemModule
    ]
})
export class SettingModule {}

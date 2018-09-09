import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { AppAngularMaterialModule } from '../../app-angular-material.module';
import { AppFlexLayoutModule } from '../../app-flex-layout.module';
import { SettingChoreMenuItemComponent } from './chores/setting-chore-menu-item.component';
import { SettingBillMenuItemComponent } from './bill/setting-bill-menu-item.component';
import { SettingProfileMenuItemComponent } from './profile/setting-profile-menu-item.component';
import { SettingHuniTodoMenuItemComponent } from './huni-todo/setting-huni-todo-menu-item.component';
import { DynamicMenuItemComponent } from './dynamic-menu-item.component';

@NgModule({
    declarations: [
        SettingChoreMenuItemComponent,
        SettingBillMenuItemComponent,
        SettingProfileMenuItemComponent,
        SettingHuniTodoMenuItemComponent,
        DynamicMenuItemComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
        AppAngularMaterialModule,
        AppFlexLayoutModule
    ],
    exports: [
        SettingChoreMenuItemComponent,
        SettingBillMenuItemComponent,
        SettingProfileMenuItemComponent,
        SettingHuniTodoMenuItemComponent,
        DynamicMenuItemComponent
    ]
})
export class SettingMenuItemModule {}

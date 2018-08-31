import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeButtonComponent } from './button/large-button.component';
import { AppFlexLayoutModule } from '../app-flex-layout.module';
import { HeaderTitle } from './header-title/header-title.component';
import { Breadcrumb } from './breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        LargeButtonComponent,
        HeaderTitle,
        Breadcrumb
    ],
    imports: [
        CommonModule, 
        AppFlexLayoutModule
    ],
    exports: [
        LargeButtonComponent,
        HeaderTitle,
        Breadcrumb
    ]
})
export class ShareModule {}

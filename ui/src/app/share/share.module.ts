import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeButtonComponent } from './button/large-button.component';
import { AppFlexLayoutModule } from '../app-flex-layout.module';
import { HeaderTitle } from './header-title/header-title.component';
import { Breadcrumb } from './breadcrumb/breadcrumb.component';
import { TrimTextPipe } from './pipe/app.pipe';

@NgModule({
    declarations: [
        LargeButtonComponent,
        HeaderTitle,
        Breadcrumb,
        TrimTextPipe
    ],
    imports: [
        CommonModule, 
        AppFlexLayoutModule
    ],
    exports: [
        LargeButtonComponent,
        HeaderTitle,
        Breadcrumb,
        TrimTextPipe
    ]
})
export class ShareModule {}

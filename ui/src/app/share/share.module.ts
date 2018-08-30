import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeButtonComponent } from './button/large-button.component';
import { AppFlexLayoutModule } from '../app-flex-layout.module';

@NgModule({
    declarations: [LargeButtonComponent],
    imports: [
        CommonModule, 
        AppFlexLayoutModule
    ],
    exports: [
        LargeButtonComponent
    ]
})
export class ShareModule {}

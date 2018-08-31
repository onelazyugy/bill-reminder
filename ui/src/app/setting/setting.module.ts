import { NgModule } from "@angular/core";
import { SettingComponent } from "./setting.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations:[
        SettingComponent
    ],
    imports:[
        CommonModule, 
        ShareModule
    ]
})
export class SettingModule{}
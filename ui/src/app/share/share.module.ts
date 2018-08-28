import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LargeButtonComponent } from "./button/large-button.component";


@NgModule({
    declarations:[LargeButtonComponent],
    exports:[
        LargeButtonComponent,
        CommonModule
    ]
})
export class ShareModule{}
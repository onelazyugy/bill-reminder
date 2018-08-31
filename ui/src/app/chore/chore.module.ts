import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChoreComponent } from "./chore.component";
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations: [
        ChoreComponent
    ],
    imports: [
        CommonModule,
        ShareModule
    ]
})
export class ChoreModule{}
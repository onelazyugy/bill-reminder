import { NgModule } from "@angular/core";
import { HuniTodoComponent } from "./huni-todo.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations:[
        HuniTodoComponent
    ],
    imports:[
        CommonModule,
        ShareModule
    ]
})
export class HuniTodoModule{}
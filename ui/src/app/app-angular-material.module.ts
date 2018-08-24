import { NgModule } from "../../node_modules/@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports:[BrowserAnimationsModule, MatButtonModule],
    exports:[BrowserAnimationsModule, MatButtonModule]
})
export class AppAngularMaterialModule{}
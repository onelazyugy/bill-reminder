import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { BillComponent } from './bill/bill.component';
import { ChoreComponent } from './chore/chore.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bills',  component: BillComponent},
    { path: 'chores', component: ChoreComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { BillComponent } from './bill/bill.component';
import { ChoreComponent } from './chore/chore.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NextComponent } from './next/next.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bills',  component: BillComponent},
    { path: 'chores', component: ChoreComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'next', component: NextComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

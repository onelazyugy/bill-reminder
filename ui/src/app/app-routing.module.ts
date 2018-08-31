import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillComponent } from './bill/bill.component';
import { ChoreComponent } from './chore/chore.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { HuniTodoComponent } from './huni-todo/huni-todo.component';

import { appRouteConstants } from './app.constants';

const appRoutes: Routes = [
    { path: appRouteConstants.home, component: HomeComponent },
    { path: appRouteConstants.bills,  component: BillComponent},
    { path: appRouteConstants.chores, component: ChoreComponent },
    { path: appRouteConstants.settings, component: SettingComponent },
    { path: appRouteConstants.huniTodo, component: HuniTodoComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

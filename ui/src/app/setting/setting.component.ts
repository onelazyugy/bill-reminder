import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { SettingBillMenuItemComponent } from './menu-item/bill/setting-bill-menu-item.component';
import { SettingChoreMenuItemComponent } from './menu-item/chores/setting-chore-menu-item.component';
import { SettingProfileMenuItemComponent } from './menu-item/profile/setting-profile-menu-item.component';

import { MatSidenav } from '@angular/material/sidenav';
import { SettingHuniTodoMenuItemComponent } from './menu-item/huni-todo/setting-huni-todo-menu-item.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  componentData = null;
  components: any[] = [
    {
      id: 0,
      icon: 'credit_card',
      label: 'BILLS',
      component: SettingBillMenuItemComponent
    },
    {
      id: 1,
      icon: 'shopping_basket',
      label: 'CHORES',
      component: SettingChoreMenuItemComponent
    },
    {
      id: 2,
      icon: 'account_circle',
      label: 'PROFILE',
      component: SettingProfileMenuItemComponent
    },
    {
      id: 3,
      icon: 'today',
      label: 'HUNI-TODO',
      component: SettingHuniTodoMenuItemComponent
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log(this.helloTemplate);
  }

  loadMenuItem = (itemIndex) => {
    console.log(itemIndex);
    this.componentData = {id: 0, component: SettingBillMenuItemComponent, inputs: { showNum: 9 }};
    this.sidenav.toggle();
  }

  back = () => {
    this.router.navigate(['/']);
  }
}

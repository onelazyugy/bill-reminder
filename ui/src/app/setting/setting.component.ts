import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { SettingBillMenuItemComponent } from './menu-item/bill/setting-bill-menu-item.component';
import { SettingChoreMenuItemComponent } from './menu-item/chores/setting-chore-menu-item.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  componentData = null;
  components: [
    {
      id: 0,
      component: SettingBillMenuItemComponent
    },
    {
      id: 1,
      component: SettingChoreMenuItemComponent
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log(this.helloTemplate);
  }

  loadMenuItem = (itemIndex) => {
    console.log('item index:', itemIndex);
    // this.componentData = this.components[0];
    this.componentData = {id: 0, component: SettingBillMenuItemComponent, inputs: { showNum: 9 }};
    this.sidenav.toggle();
  }

  back = () => {
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buttons = [{
    label: 'SETTING',
    iconLabel: 'settings'
  },{
    label: 'BILLS',
    iconLabel: 'credit_card'
  },{
    label: 'CHORES',
    iconLabel: 'shopping_basket'
  },{
    label: 'NEXT',
    iconLabel: 'today'
  }];
  constructor() { }

  ngOnInit() {
  }

  
}

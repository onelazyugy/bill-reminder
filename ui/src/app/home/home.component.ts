import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buttons = [{
    id: '0',
    label: 'SETTING',
    iconLabel: 'settings'
  },{
    id: '1',
    label: 'BILLS',
    iconLabel: 'credit_card'
  },{
    id: '2',
    label: 'CHORES',
    iconLabel: 'shopping_basket'
  },{
    id: '3',
    label: 'NEXT',
    iconLabel: 'today'
  }];
  constructor() { }

  ngOnInit() {
  }

  onClick(btnId: Number) {
    console.log(btnId);
  }
}

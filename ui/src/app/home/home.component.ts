import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CONFIG } from '../config/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Simple Bill Reminder';
  ping = 'pinging...';
  buttons = [
    {id: 0, link: '/settings'},
    {id: 1, link: '/bills'},
    {id: 2, link: '/chores'},
    {id: 3, link: '/next'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    const url = CONFIG.url;
    console.log('URL:', url);
    const appointment = {};
    console.log('REQUEST URL:', url + '/api/ping');
    axios.get(url + '/api/ping').then(result => {
        const response = result.data;
        if (response) {
          this.ping = response.message === 'pong!' ? 'Online' : 'Offline';
          console.log('ping:', this.ping);
        }
      })
      .catch(error => {
          console.error('ERROR:', error);
          this.ping = 'Offline';
      });
  }

  todayDate() {
    const todayDate = new Date();
    return todayDate;
  }

  onClick(btnId: Number) {
    switch (btnId) {
      case 0: {
        this.router.navigate([this.buttons[0].link]);
        break;
      }
      case 1: {
        this.router.navigate([this.buttons[1].link]);
        break;
      }
      case 2: {
        this.router.navigate([this.buttons[2].link]);
        break;
      }
      case 3: {
        this.router.navigate([this.buttons[3].link]);
        break;
      }
      default:
        break;
    }
  }
}

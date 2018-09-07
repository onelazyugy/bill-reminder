import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CONFIG } from '../config/globals';
import { Router } from '@angular/router';
import { buttons } from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Simple Bill Reminder';
  ping = 'pinging...';
  homeViewButtons = buttons;

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
    this.homeViewButtons.map((button) => {
      if (button.id === btnId) {
        this.router.navigate([button.route]);
      }
    });
  }
}

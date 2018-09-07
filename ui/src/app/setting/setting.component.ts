import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  mode = new FormControl('over');
  constructor(private router: Router) {}

  ngOnInit() {
  }

  back = () => {
    this.router.navigate(['/']);
  }
}

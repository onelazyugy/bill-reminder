import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chore',
  templateUrl: './chore.component.html',
  styleUrls: ['./chore.component.css']
})
export class ChoreComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  back = () => {
    this.router.navigate(['/']);
  }

}

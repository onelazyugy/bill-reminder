import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'huni-todo',
  templateUrl: './huni-todo.component.html',
  styleUrls: ['./huni-todo.component.css']
})
export class HuniTodoComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  back = () => {
    this.router.navigate(['/']);
  }

}

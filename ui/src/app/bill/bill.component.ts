import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

export interface BillCategory {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})

export class BillComponent implements OnInit {
  categories: BillCategory[] = [
    {value: 'water', viewValue: 'Water'},
    {value: 'gas', viewValue: 'Gas'},
    {value: 'electric', viewValue: 'Electric'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back = () => {
    this.router.navigate(['/']);
  }

  addBill = (form: NgForm) => {
    const billName = form.value.billName;
    const dueDate = form.value.dueDate;
    const category = form.value.category;
    const bill = {billName, dueDate, category};
    console.log('bill', bill);
  }
}

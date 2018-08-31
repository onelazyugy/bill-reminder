import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BillCategory } from './inteface/bill-category.interface';
import { Bill } from './model/bill.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})

export class BillComponent implements OnInit {
  private categories: BillCategory[] = [
    {value: 'water', viewValue: 'Water'},
    {value: 'gas', viewValue: 'Gas'},
    {value: 'electric', viewValue: 'Electric'}
  ];
  private bill = new Bill('', '', '', '', 0);

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  back = () => {
    this.router.navigate(['/']);
  }

  getCategories = () => {
    return this.categories;
  }

  addBill = (form: NgForm) => {
    const billName = form.value.billName;
    const dueDate = form.value.dueDate;
    const category = form.value.category;
    const company = form.value.company;
    const amount = form.value.bilAmount;

    this.bill.name = billName;
    this.bill.dueDate = dueDate;
    this.bill.category = category;
    this.bill.company = company;
    this.bill.amount = amount;
    console.log('bill', this.bill);
  }
}

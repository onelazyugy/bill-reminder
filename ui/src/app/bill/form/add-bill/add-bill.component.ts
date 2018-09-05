import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { BillCategory } from '../../inteface/bill-category.interface';
import { Bill } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';

@Component({
    selector: 'app-add-bill-form',
    templateUrl: './add-bill.component.html',
    styleUrls: ['./add-bill.component.css'],
    providers: [DatePipe]
})

export class AddBillFormComponent implements OnInit {
    private categories: BillCategory[] = [
        { value: 'water', viewValue: 'Water' },
        { value: 'gas', viewValue: 'Gas' },
        { value: 'electric', viewValue: 'Electric' }
    ];
    private companies: any[] = [
        'ATT', 'T-Mobile', 'EMC Jackson', 'Gwinnett Water'
    ];
    private bill = new Bill('', new Date(), '', '', 0);

    constructor(private datePipe: DatePipe, private billService: BillService) {}

    ngOnInit(): void {
        
    }

    getCategories = () => {
        return this.categories;
    }

    getCompanies = () => {
        return this.companies;
    }

    addBill = (form: NgForm) => {
        const billName = form.value.billName;
        const dueDate = form.value.dueDate;
        const category = form.value.category;
        const company = form.value.company;
        const amount = form.value.bilAmount;

        this.bill.name = billName;
        // this.bill.dueDate = this.datePipe.transform(dueDate, 'MM/dd/yyyy');
        this.bill.dueDate = dueDate;
        this.bill.category = category;
        this.bill.company = company;
        this.bill.amount = amount;
        console.log('bill', this.bill);
        const result = this.billService.addBill(this.bill);
        console.log(result);
    }
}

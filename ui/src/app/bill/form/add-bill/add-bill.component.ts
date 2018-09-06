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
    message = 'Submitting...';
    isAddingBill = false;
    isErrorAddingBill = false;

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
        this.isAddingBill = true;
        let bill = new Bill(form.value.billName, form.value.dueDate, form.value.category, form.value.company, form.value.bilAmount);
        this.billService.addBill(bill).subscribe(
            (resp) => {
                this.isAddingBill = false;
                this.billService.setBills(resp.bills);
                this.isErrorAddingBill = false;
                form.resetForm();
            },
            (error) => {
                this.isAddingBill = false;
                this.isErrorAddingBill = true;
                this.message = error;
                console.error(error);
            }
        )
    }
}

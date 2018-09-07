import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Bill } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';
import { BillCategory } from '../../model/bill-inteface.model';

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
    isRecurringBill = true;
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
        const bill = new Bill(form.value.billName, form.value.dueDate, form.value.category,
            form.value.company, form.value.bilAmount, form.value.recurringBill);
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
        );
    }
}

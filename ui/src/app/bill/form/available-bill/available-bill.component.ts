import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';
import { BillResponse } from '../../inteface/bill-response.interface';

@Component({
    selector: 'app-available-bill',
    templateUrl: './available-bill.component.html',
    styleUrls: ['./available-bill.component.css']
})

export class AvailableBillComponent implements OnInit {
    private bills: Bill[] = [];
    private loadingMessage = 'Loading...';
    private isLoading = true;
    private isError = false;

    constructor(private billService: BillService) {}

    ngOnInit() {
        this.fetchBills();
    }

    private fetchBills = () => {
        this.billService.fetchBills().subscribe(
            (resp) => {
                let billResponse: BillResponse;
                if (resp && resp.status === 200) {
                    billResponse = { ...resp.body };
                    this.bills = billResponse.bills;
                    console.log('this.bills:', this.bills);
                    this.isLoading = false;
                }
            },
            (error) => {
                console.log(error);
                this.isLoading = false;
                this.isError = true;
                this.loadingMessage = error;
            }
        );
    }

    public getBills = () => {
        return this.bills;
    }

    public callback = () => {

    }

    public isLoadingData = () => {
        return this.isLoading;
    }

    public getLoadingMessage = () => {
        return this.loadingMessage;
    }

    public isErrorLoadingData = () => {
        return this.isError;
    }
}

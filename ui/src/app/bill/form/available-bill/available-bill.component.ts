import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';
import { BillResponse } from '../../inteface/bill-response.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-available-bill',
    templateUrl: './available-bill.component.html',
    styleUrls: ['./available-bill.component.css']
})

export class AvailableBillComponent implements OnInit {
    bills: Bill[] = [];
    subscription: Subscription;
    message = 'Loading...';
    isLoading = true;
    isError = false;

    constructor(private billService: BillService) {}

    ngOnInit() {
        this.fetchBills();
        this.subscription = this.billService.billsChanged.subscribe(
        (bills: Bill[]) => {
            this.bills = bills;
            this.isLoading = false;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private fetchBills = () => {
        this.billService.fetchBills().subscribe(
            (resp) => {
                let billResponse: BillResponse;
                if (resp && resp.status === 200) {
                    billResponse = { ...resp.body };
                    const bills = billResponse.bills;
                    // this.isLoading = false;
                    // load billService with data
                    this.billService.setBills(bills);
                }
            },
            (error) => {
                console.error(error);
                this.isLoading = false;
                this.isError = true;
                this.message = error;
            }
        );
    }
}

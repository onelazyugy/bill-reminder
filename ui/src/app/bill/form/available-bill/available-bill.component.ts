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
    private bills: Bill[];
    private billResponse: BillResponse;
    private loading: string = 'Loading...';

    constructor(private billService: BillService) {}

    ngOnInit() {
        this.getBills();
    }

    private getBills = () => {
        this.billService.getBills().subscribe(this.successCallback, this.errorCallback);
    }

    private successCallback(resp) {
        this.billResponse = { ...resp.body };
        console.log('get bills response:', this.billResponse);
    }

    private errorCallback(error) {
        console.log('error:', error);
    }
}

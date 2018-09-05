import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';

@Component({
    selector: 'app-available-bill',
    templateUrl: './available-bill.component.html',
    styleUrls: ['./available-bill.component.css']
})

export class AvailableBillComponent implements OnInit {
    private bills: Bill[];
    isLoading = true;

    constructor(private billService: BillService) {}

    ngOnInit(): void {
        this.billService.getBills(this.done);
    }

    done = (data) => {
        console.log('get bills data:', data.bills);
        this.bills = data.bills;
        this.isLoading = false;
    }
}

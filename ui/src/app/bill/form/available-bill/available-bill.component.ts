import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';

@Component({
    selector: 'app-available-bill',
    templateUrl: './available-bill.component.html',
    styleUrls: ['./available-bill.component.css']
})

export class AvailableBill implements OnInit{
    private bill = new Bill('', new Date(), '', '', 0);

    constructor() {}

    ngOnInit(): void {
        
    }
}
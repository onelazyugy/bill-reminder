import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import axios from 'axios';
import { CONFIG } from '../../config/globals';

@Injectable()
export class BillService {
    addBill(bill: Bill) {
        return {'success': true};
    }

    getBills(done) {
        const url = CONFIG.url;
        axios.get(url + '/api/bills').then(result => {
            const response = result.data;
            if (response) {
                done(response);
            }
        })
        .catch(error => {
            console.error('ERROR:', error);
        });
    }

    editBill() {
        return {};
    }

    deleteBill() {
        return {};
    }
}

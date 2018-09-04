import { Injectable } from "../../../../node_modules/@angular/core";
import { Bill } from "../model/bill.model";

@Injectable()
export class BillService {
    addBill(bill: Bill) {
        return {'success': true};
    }

    editBill() {
        return {};
    }

    deleteBill() {
        return {};
    }
}
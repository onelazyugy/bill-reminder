import { Bill } from '../model/bill.model';

export interface BillResponse {
    success: boolean;
    message: string;
    bills: Bill[];
}

export interface BillCategory {
    value: string;
    viewValue: string;
}

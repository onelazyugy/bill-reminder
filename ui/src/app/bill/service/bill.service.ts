import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { CONFIG } from '../../config/globals';
import { BillResponse } from '../inteface/bill-response.interface';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class BillService {
    private apiURL = CONFIG.url;
    billsChanged = new Subject<Bill[]>();
    constructor(private httpClient: HttpClient) {}

    /**
     * https://alligator.io/angular/httpclient-intro/
     * https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example
     * https://www.metaltoad.com/blog/angular-5-making-api-calls-httpclient-service
     * https://malcoded.com/posts/angular-fundamentals-http
     */

    addBill (bill: Bill): Observable<BillResponse> {
        // return this.httpClient.post(this.apiURL + '/api/bill', bill);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.httpClient.post<BillResponse>(this.apiURL + '/api/bill', bill, httpOptions)
            .pipe(catchError(this.handleError))
    }

    /**
     * retry a failed request up to 3 times
     * handle error
     */
    fetchBills(): Observable<HttpResponse<BillResponse>> {
        return this.httpClient.get<BillResponse>(this.apiURL + '/api/bill', { observe: 'response' })
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    editBill = () => {
        return {};
    }

    deleteBill = () => {
        return {};
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    public setBills = (bills) => {
        this.billsChanged.next(bills);
        // this.bills = bills;
    }
}


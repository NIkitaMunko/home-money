import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Bill} from '../models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) {
  }

  getBill(): Observable<Bill> {
    return this.http.get<Bill>('http://localhost:3000/bill');
  }

  getCurrency() {

  }

}

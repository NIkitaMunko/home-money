import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Bill} from '../models/bill.model';
import {BaseApi} from '../../../shared/core/base-api';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseApi {

  constructor(public override http: HttpClient) {
    super(http)
  }

  getBill(): Observable<Bill> {
    return this.get('bill')
  }

  getCurrency(): Observable<any> {
    return this.get('currency')
  }

}

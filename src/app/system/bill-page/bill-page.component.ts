import {Component} from '@angular/core';
import {BillCardComponent} from './bill-card/bill-card.component';
import {CurrencyCardComponent} from './currency-card/currency-card.component';
import {BillService} from '../shared/services/bill.service';
import {Bill} from '../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-page',
  imports: [
    BillCardComponent,
    CurrencyCardComponent
  ],
  templateUrl: './bill-page.component.html',
  styleUrl: './bill-page.component.scss'
})
export class BillPageComponent {

  currency: any;
  bill!: Bill;

  constructor(private billService: BillService) {
  }

  onRefresh() {
    this.billService.getCurrency()
      .subscribe((currency: any) => {
        this.currency = currency;
      })
  }

}

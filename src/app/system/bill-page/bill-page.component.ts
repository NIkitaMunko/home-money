import { Component } from '@angular/core';
import {BillCardComponent} from './bill-card/bill-card.component';
import {CurrencyCardComponent} from './currency-card/currency-card.component';

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

}

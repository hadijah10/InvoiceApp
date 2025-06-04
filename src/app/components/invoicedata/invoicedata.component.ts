import { Component, Input } from '@angular/core';
import { Invoice } from '../../../model/interfaces/data';
import { CurrencyPipe } from '@angular/common';
import { DatePipe,TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-invoicedata',
  imports: [DatePipe,TitleCasePipe,CurrencyPipe],
  templateUrl: './invoicedata.component.html',
  styleUrl: './invoicedata.component.scss',
})
export class InvoicedataComponent {
  @Input() invoice!: Invoice;
}

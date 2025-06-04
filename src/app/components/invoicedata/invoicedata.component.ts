import { Component, Input } from '@angular/core';
import { IData } from '../../../model/interfaces/data';

@Component({
  selector: 'app-invoicedata',
  imports: [],
  templateUrl: './invoicedata.component.html',
  styleUrl: './invoicedata.component.scss',
})
export class InvoicedataComponent {
  @Input() invoice!: IData;
}

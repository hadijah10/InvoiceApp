import { Component, Input } from '@angular/core';
import { Invoice } from '../../../model/interfaces/data';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DatePipe,TitleCasePipe} from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoicedata',
  imports: [DatePipe,TitleCasePipe,CurrencyPipe,RouterLink,CommonModule],
  templateUrl: './invoicedata.component.html',
  styleUrl: './invoicedata.component.scss',
})
export class InvoicedataComponent {
  @Input() invoice!: Invoice;
  status(){
    if(this.invoice.status == 'pending'){
      return 'pending'
    }
    else if(this.invoice.status == 'draft'){
      return 'draft'
    }
    else if(this.invoice.status == 'paid'){
      return 'paid'
    }
    else{
      return 'pending'
    }
  }
}

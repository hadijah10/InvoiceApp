import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InvoicedataComponent } from '../invoicedata/invoicedata.component';
import { InvoiceService } from '../../services/invoice.service';
import { IData } from '../../../assets/model/interfaces/data';

@Component({
  selector: 'app-landingpage',
  imports: [HeaderComponent,InvoicedataComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  invoices!: IData[];
  constructor(private invoice: InvoiceService) {
    this.invoice.getInvoices().subscribe((data) => {
      this.invoices = data
    });
 
  }
     TClick(){
      console.log(this.invoices)
    }
}

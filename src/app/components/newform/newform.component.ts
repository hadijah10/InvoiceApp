import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InvoicedataComponent } from '../invoicedata/invoicedata.component';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../../model/interfaces/data';
import { FormComponent } from '../form/form.component';
import { LandingpageComponent } from '../landingpage/landingpage.component';

@Component({
  selector: 'app-newform',
  imports: [FormComponent,HeaderComponent,InvoicedataComponent],
  templateUrl: './newform.component.html',
  styleUrl: './newform.component.scss',
})
export class NewformComponent {
  invoices: Invoice[] = [];
  formtype:boolean = true

  constructor(private invoice: InvoiceService) {
    this.invoices = [...this.invoice.getInvoicesFromStorage()]
 
  }
  // handleShowForm(event:boolean){
  //   this.formtype = 'newform'
  //   this.showform = true
  // }
  // handleDiscardForm(event:Event){
   
  // }

}

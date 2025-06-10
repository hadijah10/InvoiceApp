import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InvoicedataComponent } from '../invoicedata/invoicedata.component';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../../model/interfaces/data';

@Component({
  selector: 'app-landingpage',
  imports: [HeaderComponent,InvoicedataComponent,],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent implements OnInit {
  invoices: Invoice[] = [];
  formtype:string = 'newform'
  showform:boolean = false;
  constructor(private invoiceservice: InvoiceService) {
   
  }
  ngOnInit(){
    this.invoiceservice.loaddata().subscribe(data => {
  this.invoices = data
 })
 
  }

}

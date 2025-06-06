import { Component,inject,Input, OnInit } from '@angular/core';
import { Invoice } from '../../../model/interfaces/data';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoicedetails',
  imports: [TitleCasePipe,RouterLink,CommonModule],
  templateUrl: './invoicedetails.component.html',
  styleUrl: './invoicedetails.component.scss'
})
export class InvoicedetailsComponent implements OnInit {
  invoice!: Invoice 
  id:string | null =''
  route =inject(ActivatedRoute)
  showDelete:boolean = false
constructor(private invservice:InvoiceService){
 
  this.invservice.getInvoices().subscribe((data) => {
    [this.invoice] = data.filter(d => d.id == this.id)})
}

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

  delete(){
    this.showDelete = !this.showDelete;
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')
    })
  }
}

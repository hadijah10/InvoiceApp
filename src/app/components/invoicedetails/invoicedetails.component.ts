import { Component,inject,Input, OnInit } from '@angular/core';
import { Invoice } from '../../../model/interfaces/data';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, Router,RouterLink } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-invoicedetails',
  imports: [TitleCasePipe,RouterLink,CommonModule,RouterOutlet],
  templateUrl: './invoicedetails.component.html',
  styleUrl: './invoicedetails.component.scss'
})
export class InvoicedetailsComponent  {
  invoice!: Invoice 
  id:string | null =''
  route =inject(ActivatedRoute)
  router = inject(Router)
  showDelete:boolean = false
constructor(private invservice:InvoiceService){
      //setting the id
       this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')})
      
      //fetching data from localstorage.
      this.invoice = this.invservice.getInvoiceData(this.id)[0]
    
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

  toggleDelete(){
    this.showDelete = !this.showDelete;
  }

  delete(id:string | null){
    this.invservice.deleteInvoiceFromStorage(id);
    this.router.navigate([''])
  }

markAsPaid(id:string | null){
  this.invservice.markAsPaid(id)
}

 
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { InvoiceService } from './services/invoice.service';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
  constructor(private invoiceservice:InvoiceService){
  
  }
  title = 'invoice';
 
  ngOnInit(): void {
      this.invoiceservice.loaddata().subscribe((data) =>{} )
  }

 
}

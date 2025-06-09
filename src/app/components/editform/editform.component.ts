import { Component ,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../../model/interfaces/data';
import { InvoiceService } from '../../services/invoice.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-editform',
  imports: [FormComponent],
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.scss'
})
export class EditformComponent {
  id:string | null = null
  activatedroute = inject(ActivatedRoute)
  invoicedata !: Invoice 
  invoiceservice= inject(InvoiceService)
constructor(){
    this.activatedroute.paramMap.subscribe((params) => {
        this.id = params.get('id')
        if(this.id){
          this.invoicedata = this.invoiceservice.getInvoiceData(this.id)[0]
        }
})
}
}


import { Component,EventEmitter, Input, output, Output,inject} from '@angular/core';
import {Invoice} from '../../../model/interfaces/data';
import { Router,RouterLink } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() invoices!:Invoice[];
    route = inject(Router)
   showForm=output<boolean>()

  handleForm(){
    
  
  }

}

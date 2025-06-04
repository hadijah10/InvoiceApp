import { Component, Input} from '@angular/core';
import {Invoice} from '../../../model/interfaces/data';

@Component({
  standalone:true,
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() invoices!:Invoice[]
}

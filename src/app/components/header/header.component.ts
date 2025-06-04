import { Component, Input} from '@angular/core';
import {IData} from '../../../model/interfaces/data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() invoices!:IData[]
}

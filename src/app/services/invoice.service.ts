import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IData} from '../../model/interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private api = 'assets/model/data/data.json';

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<IData[]>{
   return this.http.get<IData[]>('assets/model/data/data.json')
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Invoice} from '../../model/interfaces/data';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private storageKey = 'invoiceData';
  private jsonUrl = 'assets/model/data/data.json';

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]>{
   return this.http.get<Invoice[]>('assets/model/data/data.json')
  }
  // loaddata(): Observable<Invoice[]>{
  //   const storedData = localStorage.getItem(this.storageKey)
  //   if(storedData){
  //     return JSON.parse(this.storageKey)
  //   }
  //   else{
  //      // Fetch from JSON file and store in localStorage
  //     return this.http.get(this.jsonUrl).pipe(
  //       tap(data => {
  //         localStorage.setItem(this.storageKey, JSON.stringify(data));
  //       })
  //     );
  //   }
  // }
}

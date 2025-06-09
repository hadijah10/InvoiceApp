import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EStatus, Invoice} from '../../model/interfaces/data';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';


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
  loaddata(): Observable<Invoice[]>{
    const storedData = localStorage.getItem(this.storageKey)
    if(storedData){
      return of(JSON.parse(storedData) as Invoice[]); 
    }
    else{
       // Fetch from JSON file and store in localStorage
      return this.http.get<Invoice[]>(this.jsonUrl)
      .pipe(
        tap(data => {
          localStorage.setItem(this.storageKey, JSON.stringify(data));
        })
      );
    }
  }
  getInvoicesFromStorage(): Invoice[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]') as Invoice[];
  }

  saveInvoicesToStorage(data: Invoice[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getInvoiceData(id:string | null): Invoice[]{
    return this.getInvoicesFromStorage().filter((data) => 
      data.id == id)
  }

   deleteInvoiceFromStorage(id:string | null): void{
     const invoices = this.getInvoicesFromStorage();
    const updated = invoices.filter(invoice => invoice.id != id);
    this.saveInvoicesToStorage(updated);
  }

  markAsPaid(id:string | null){
    const invoices = this.getInvoicesFromStorage()
    const updatedInvoices = invoices.map(data => data.id==id? {...data,status: EStatus.paid}: data)
    this.saveInvoicesToStorage(updatedInvoices)
  }

  addInvoiceData(data:Invoice){
    const newdata = [...this.getInvoicesFromStorage(),data]
    this.saveInvoicesToStorage(newdata)
  }

  clearInvoices(): void {
    localStorage.removeItem(this.storageKey);
  }


}

export interface Invoice {
  id: string;
  createdAt: string; // ISO date string
  paymentDue: string; // ISO date string
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: EStatus;
  senderAddress: Address;
  clientAddress: Address;
  items: InvoiceItem[];
  total: number;
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
export enum EStatus{
  draft='draft',
  pending = 'pending',
  paid='paid',

}

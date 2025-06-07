import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { InvoicedetailsComponent } from './components/invoicedetails/invoicedetails.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/invoices',
        pathMatch:'full'
    },
    {
        path:'invoices',
        title:"Invoice",
        component: LandingpageComponent
    },
    {
        path:'invoices/:id',
        title: "Invoice Details",
        component: InvoicedetailsComponent
    },
    {
        path:'**',
        title: "404 Page",
        component: ErrorpageComponent
    }
];

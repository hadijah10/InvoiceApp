import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { InvoicedetailsComponent } from './components/invoicedetails/invoicedetails.component';
import { FormComponent } from './components/form/form.component';
import { NewformComponent } from './components/newform/newform.component';
import { AppComponent } from './app.component';
import { EditformComponent } from './components/editform/editform.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/invoices',
        pathMatch:'full'
    },
    {
        path:'invoices',
        title:"Invoice",
        component: AppComponent,
        children: [
      { path: '', component: LandingpageComponent }, // /invoice
      { path: 'new', component: NewformComponent }, // /invoice/new
       {
        path:':id',
        title: "Invoice Details",
        component: InvoicedetailsComponent,
    },
    {
        path:':id/edit',
        title: 'Edit Invoice',
        component: EditformComponent,
       }
    ]
    },
    {
        path:'**',
        title: "404 Page",
        component: ErrorpageComponent
    },

];

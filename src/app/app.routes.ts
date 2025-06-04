import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

export const routes: Routes = [
    {
        path:'',
        title:"Invoice",
        component: LandingpageComponent
    }
];

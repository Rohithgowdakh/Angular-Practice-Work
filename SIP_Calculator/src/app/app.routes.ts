import { Routes } from '@angular/router';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component';
import { FdCalculatorComponent } from './fd-calculator/fd-calculator.component';
export const routes: Routes = [
    {path:'', redirectTo:"/sip-calculator",pathMatch:'full'},
    {path:'sip-calculator',component:SipCalculatorComponent},
    {path:'fd-calculator',component:FdCalculatorComponent}
];

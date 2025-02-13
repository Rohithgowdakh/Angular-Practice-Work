import { Routes } from '@angular/router';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component';
import { FdCalculatorComponent } from './fd-calculator/fd-calculator.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { IndianIndicesComponent } from './indian-indices/indian-indices.component';
export const routes: Routes = [
    {path:'', redirectTo:"/sip-calculator",pathMatch:'full'},
    {path:'sip-calculator',component:SipCalculatorComponent},
    {path:'fd-calculator',component:FdCalculatorComponent},
    {path:'stocks-data',component:StockDataComponent},
    {path:'indian-indices',component:IndianIndicesComponent}
];

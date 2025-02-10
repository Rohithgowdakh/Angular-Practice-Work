import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-sip-calculator',
  imports:[FormsModule,CommonModule],
  templateUrl: './sip-calculator.component.html',
  styleUrls: ['./sip-calculator.component.css']
})
export class SipCalculatorComponent {
  monthlyInvestment: number = 25000;
  expectedRate: number = 12;
  timePeriod: number = 10;

  get investedAmount(): number {
    return this.monthlyInvestment * 12 * this.timePeriod;
  }

  get estimatedReturns(): number {
    const r = this.expectedRate / 100 / 12; // Monthly interest rate
    const n = this.timePeriod * 12; // Total months
    return this.monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) - this.investedAmount;
  }

  get totalValue(): number {
    return this.investedAmount + this.estimatedReturns;
  }
}


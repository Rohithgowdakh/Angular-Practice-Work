import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-sip-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sip-calculator.component.html',
  styleUrls: ['./sip-calculator.component.css']
})
export class SipCalculatorComponent {
  selectedMode: string = 'sip'; // Default mode is SIP

  // SIP Calculation Variables
  monthlyInvestment: number = 25000;
  expectedRate: number = 12;
  timePeriod: number = 10;

  // Lumpsum Calculation Variables
  totalInvestment: number = 100000;
  // SIP Investment Calculation
  get investedAmount(): number {
    return this.selectedMode === 'sip' ? this.monthlyInvestment * 12 * this.timePeriod : this.totalInvestment;
  }

  get estimatedReturns(): number {
    if (this.selectedMode === 'sip') {
      const r = this.expectedRate / 100 / 12; // Monthly interest rate
      const n = this.timePeriod * 12; // Total months
      return this.monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) - this.investedAmount;
    } else {
      const r = this.expectedRate / 100; // Annual interest rate
      const n = this.timePeriod; // Number of years
      return this.totalInvestment * Math.pow(1 + r, n) - this.totalInvestment;
    }
  }

  get totalValue(): number {
    return this.investedAmount + this.estimatedReturns;
  }
  validateExpectedRate() {
    if (this.expectedRate > 30) {
      this.expectedRate = 30;
    } else if (this.expectedRate < 1) {
      this.expectedRate = 1;
    }
  }
  
}

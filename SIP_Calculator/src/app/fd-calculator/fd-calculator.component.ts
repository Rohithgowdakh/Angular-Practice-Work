import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-fd-calculator',
  imports:[CommonModule,FormsModule],
  templateUrl: './fd-calculator.component.html',
  styleUrls: ['./fd-calculator.component.css']
})
export class FdCalculatorComponent {
  investment: number = 100000;  // Default investment amount
  interestRate: number = 6.5;   // Default interest rate
  timePeriod: number = 5;       // Default years

  estimatedReturns: number = 0;
  totalValue: number = 0;

  constructor() {
    this.calculateFD();
  }

  calculateFD() {
    // Compound Interest Formula: A = P (1 + r/n)^(nt)
    let P = this.investment;
    let r = this.interestRate / 100;
    let n = 4; // Quarterly compounding
    let t = this.timePeriod;

    this.totalValue = P * Math.pow((1 + r / n), n * t);
    this.estimatedReturns = this.totalValue - this.investment;
  }
}


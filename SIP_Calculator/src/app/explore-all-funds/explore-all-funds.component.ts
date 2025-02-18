import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FundData, StockService } from '../services/api.service';
interface Fund {
  category: string;
  name: string;
  crisilRank: number;
  aum: number;
  oneMonth: number;
  sixMonths: number;
  oneYear: number;
  threeYears: number;
  fiveYears: number;
}

@Component({
  selector: 'app-explore-all-funds',
  imports:[CommonModule],
  templateUrl: './explore-all-funds.component.html',
  styleUrls: ['./explore-all-funds.component.css']
})
export class ExploreAllFundsComponent implements OnInit {
  
  categories: string[] = ["Equity", "Debt Long Term", "Debt Short Term", "Hybrid", "Tax-saving"];
  selectedCategory: string = "Debt Long Term";
funds: FundData[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getFunds().subscribe(
      (data: FundData[]) => {
        this.funds = data;  
      }
    );
  }

  changeCategory(category: string) {
    this.selectedCategory = category;
  }

  getFilteredFunds(): Fund[] {
    return this.funds.filter(fund => fund.category === this.selectedCategory);
  }
}

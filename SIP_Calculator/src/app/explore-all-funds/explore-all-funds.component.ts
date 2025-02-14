import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
  funds: Fund[] = [];
  categories: string[] = ["Equity", "Debt Long Term", "Debt Short Term", "Hybrid", "Tax-saving"];
  selectedCategory: string = "Debt Long Term";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFunds();
  }

  loadFunds() {
    this.http.get<Fund[]>('funds-data.json').subscribe(data => {
      this.funds = data;
    });
  }

  changeCategory(category: string) {
    this.selectedCategory = category;
  }

  getFilteredFunds(): Fund[] {
    return this.funds.filter(fund => fund.category === this.selectedCategory);
  }
}

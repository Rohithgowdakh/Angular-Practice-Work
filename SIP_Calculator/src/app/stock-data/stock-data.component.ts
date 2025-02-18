import { Component, OnInit, } from '@angular/core';
import { StockService, FundData } from '../services/api.service'; 
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  imports: [NgFor],
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {
  funds: FundData[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getFunds().subscribe(
      (data: FundData[]) => {
        this.funds = data;  
      }
    );
  }
}

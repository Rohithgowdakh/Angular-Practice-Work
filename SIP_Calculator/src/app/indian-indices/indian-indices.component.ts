import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { IndexData } from './stock.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indian-indices',
  standalone: true,
  imports: [NgClass, NgFor, CommonModule],
  templateUrl: './indian-indices.component.html',
  styleUrls: ['./indian-indices.component.css']
})
export class IndianIndicesComponent implements OnInit {
  allIndices: IndexData[] = [];  // List of all indices
  selectedIndexData: any[] = []; // Stocks of the selected index
  selectedIndex: string = "NIFTY 50"; // ✅ Default selection

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch initial data from JSON
    this.http.get<IndexData[]>('data.json').subscribe((response) => {
      this.allIndices = response;
      this.onSelectIndex("NIFTY 50");
    });

    // Update stock data randomly every 2 seconds
    setInterval(() => {
      this.updateRandomStockData();
    }, 2000);
  }

  onSelectIndex(indexName: string) {
    this.selectedIndex = indexName;
    const selected = this.allIndices.find(index => index.name === indexName);
    this.selectedIndexData = selected ? selected.stocks : [];
  }

  updateRandomStockData() {
    this.selectedIndexData = this.selectedIndexData.map(stock => ({
      ...stock,
      ltp: this.getRandomValue(stock.ltp),
      percentageChange: this.getRandomPercentage(),
      change: this.getRandomChange(),
      volume: this.getRandomVolume(),
      buyPrice: this.getRandomValue(stock.buyPrice),
      sellPrice: this.getRandomValue(stock.sellPrice),
      buyQty: this.getRandomQuantity(),
      sellQty: this.getRandomQuantity()
    }));
  }

  getRandomValue(currentValue: number): number {
    return +(currentValue + (Math.random() * 10 - 5)).toFixed(2); // ±5 variation
  }

  getRandomPercentage(): number {
    return +(Math.random() * 4 - 2).toFixed(2); // Between -2% to +2%
  }

  getRandomChange(): number {
    return +(Math.random() * 5 - 2.5).toFixed(2); // Between -2.5 to +2.5
  }

  getRandomVolume(): number {
    return Math.floor(Math.random() * 500000 + 50000); // Between 50k to 500k
  }

  getRandomQuantity(): number {
    return Math.floor(Math.random() * 100 + 50); // Between 50 to 100
  }
}

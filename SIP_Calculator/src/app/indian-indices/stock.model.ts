export interface Stock {
    name: string;
    ltp: number;
    percentageChange: number;
    change: number;
    volume: number;
    buyPrice: number;
    sellPrice: number;
    buyQty: number;
    sellQty: number;
  }
  
  export interface IndexData {
    name: string;
    stocks: Stock[];
  }
  
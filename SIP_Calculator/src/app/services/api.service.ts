import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FundData {
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

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'http://localhost:5067/api/sample'; 

  constructor(private http: HttpClient) {}

  getFunds(): Observable<FundData[]> {
    return this.http.get<FundData[]>(this.apiUrl)
  }
}

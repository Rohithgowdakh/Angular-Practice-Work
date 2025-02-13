import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  imports:[NgFor],
  styleUrl: './stock-data.component.css'
})
export class StockDataComponent implements OnInit{
  companies:any[]=[];
  constructor(private apiService:ApiService){}
  ngOnInit() {
    this.getCompanies();
  }
  getCompanies(){
    this.apiService.getCompanies().subscribe(data=>{
      this.companies= Array.isArray(data) ? data : [];
      ;
    })
  }
}

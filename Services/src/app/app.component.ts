import { Component, OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  imports:[NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  users:any[]=[];
  constructor(private apiService:ApiService){}
  ngOnInit() {
      this.getUsers();
      this.addUsers();
      setTimeout(() => {
        this.updateUser(10);
      }, 2000);
      this.deleteUser(10);
  }
  getUsers(){
    this.apiService.getUsers().subscribe((data)=>{
      this.users=data
    })
  }
  addUsers(){
    const user={id: 11,name:'MANU D P',email:'manu@new.com'};
    this.apiService.addUser(user).subscribe(data=>{
      this.users.push(data)
    })
  }
  updateUser(id:number){
    const updateUser={name:'Manu D P',email:'manudp@new.com'};
    this.apiService.updateUser(id,updateUser).subscribe(data=>{
      this.users=this.users.map(user=>user.id===id?data:user);
    })
  }
  deleteUser(id:number){
    this.apiService.deleteUser(id).subscribe(()=>{
      this.users=this.users.filter(user=>user.id!==id)
    })
  }
  
}

import { Component, EventEmitter, Input, output, Output } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  // selectedUser=DUMMY_USERS[randomIndex];
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
    @Input({required:true}) user!:User;
    @Input({required:true}) selected!:boolean;
  @Output() select=new EventEmitter<string>();
    // select=output<string>(); this functioning same as above line
  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }
  onSelectUser()
  {
    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUser=DUMMY_USERS[randomIndex];
      this.select.emit(this.user.id);
  }
}

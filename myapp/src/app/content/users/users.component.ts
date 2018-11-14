import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';
import { User } from 'src/app/common/model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  userChanging:User;
  onChange:boolean = false;
  onAdd:boolean = false;
  constructor(private _userService:UsersService) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
    this._userService.usersChanged.subscribe(
      (users:User[])=>{
        this.users = users;
        this.onAdd = false;
        this.onChange = false;
      }
    );
  }
  isActived(user:User):boolean{
    return this._userService.userIsActive(user);
  }
  inDeleteUser(user:User){
    this._userService.onDeleteUser(user);
  }
  inChangeUser(user:User){
    this.userChanging = user;
    if(this.isActived(user)) this._userService.goToPage();
    this.onChange = true;
  }
  inAddUser(){
    this.onAdd = true;
  }

}

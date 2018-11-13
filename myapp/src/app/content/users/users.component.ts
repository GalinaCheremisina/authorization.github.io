import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';
import { MenuComponent } from '../block/menu/menu.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[];
  userChanging:IUser;
  onChange:boolean = false;
  onAdd:boolean = false;
  constructor(private _userService:UsersService) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
    this._userService.usersChanged.subscribe(
      (users:IUser[])=>{
        this.users = users;
        this.onAdd = false;
        this.onChange = false;
      }
    );
  }
  isActived(user:IUser):boolean{
    return this._userService.userIsActive(user);
  }
  inDeleteUser(user:IUser){
    this._userService.onDeleteUser(user);
  }
  inChangeUser(user:IUser){
    this.userChanging = user;
    if(this.isActived(user)) this._userService.goToPage();
    this.onChange = true;
  }
  inAddUser(){
    this.onAdd = true;
  }

}

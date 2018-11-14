import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  userLogged:boolean;
  
  constructor(private _userService:UsersService) {}

  ngOnInit(){
    this._userService.userLogged.subscribe(
      (value:boolean)=>{ this.userLogged = value}
    )
  }

  onLogOut(){
    this._userService.inLogOut();
  }

}

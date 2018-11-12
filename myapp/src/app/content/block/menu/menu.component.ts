import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/common/service/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  constructor(
    private _router:Router,
    private _userService:UsersService) { }

  onLogOut(){
    this._router.navigate(['']);
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './common/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  userLogins:boolean = false;
  constructor(private _userService:UsersService){}
  ngOnInit(){
    this._userService.userLogins.subscribe(
      (value:boolean)=>{ this.userLogins = value}
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './common/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  userLogged:boolean = false;

  constructor(private _userService:UsersService){}
  
  ngOnInit(){
    this._userService.userLogged.subscribe(
      (value:boolean)=>{ this.userLogged = value}
    )
  }
}

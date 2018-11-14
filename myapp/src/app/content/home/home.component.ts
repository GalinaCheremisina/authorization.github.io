import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  warning:boolean = false;
  nameControl:FormControl;
  passwordControl:FormControl;
  focusNameInput:boolean;
  focusPasswordInput:boolean;

  constructor(private _userService:UsersService) { }

  ngOnInit() {
    this.nameControl = new FormControl('',[Validators.required,emailValidator]);
    this.passwordControl = new FormControl('',[Validators.minLength(3),Validators.required]);
    this.nameControl.statusChanges.subscribe(()=>{this.focusNameInput = true;});
    this.passwordControl.statusChanges.subscribe(()=>{this.focusPasswordInput = true;});
  }
  onLogin(){
    const intName:string = this.nameControl.value;
    const intPassword:string = this.passwordControl.value;
    if (this._userService.userLogin(intName,intPassword)){
      this._userService.goToPage();
    }else{
      this.warning = true;
    }
  }
}

function emailValidator(formControl:FormControl){
  let pattern:RegExp = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  if(!pattern.test(formControl.value)) 
    return {emailValidator:{message:'E-mail incorrect'}};
    return null;
}


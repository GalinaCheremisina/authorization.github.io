import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('passwordInput') passwordInputRef:ElementRef;

  warning:boolean = false;
  warningUsername:boolean = false;
  warningPassword:boolean = false;

  constructor(private _userService:UsersService) { }

  ngOnInit() {
    
  }
  onLogin(){
    const intName:string = this.nameInputRef.nativeElement.value;
    const intRpassword:string = this.passwordInputRef.nativeElement.value;
    (intName.length == 0)? this.warningUsername=true:this.warningUsername=false;
    (intRpassword.length == 0)? this.warningPassword=true:this.warningPassword=false;
    if (this._userService.userLogin(intName,intRpassword)){
      this._userService.goToPage();
    }else{
      this.warning = true;
    }
    console.log(this._userService.userChecked);
  }
}

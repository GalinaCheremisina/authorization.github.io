import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';
import { User } from 'src/app/common/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('surname') surnameInputRef:ElementRef;
  @ViewChild('age') ageRef:ElementRef;
  @ViewChild('email') emailRef:ElementRef;
  @ViewChild('password') passwordRef:ElementRef;

  activeUser:User;
  constructor(private _userService:UsersService) { }

  ngOnInit() {
    this.activeUser = this._userService.userChecked;
  }
  onChangeItem(user:User){
    let userChanged:User = {
      name: this.nameInputRef.nativeElement.value,
      surname: this.surnameInputRef.nativeElement.value,
      age: this.ageRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      password: this.passwordRef.nativeElement.value, 
    }
    this._userService.userChange(userChanged);
  }
}

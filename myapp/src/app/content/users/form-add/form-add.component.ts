import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent {

  newuser:IUser;
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('surname') surnameInputRef:ElementRef;
  @ViewChild('secondName') secondNameRef:ElementRef;
  @ViewChild('age') ageRef:ElementRef;
  @ViewChild('email') emailRef:ElementRef;
  @ViewChild('password') passwordRef:ElementRef;

  constructor(private _userService:UsersService) { }
  onAddAnyNewuser(){
    let userNew:IUser = {
      name: this.nameInputRef.nativeElement.value,
      surname: this.surnameInputRef.nativeElement.value,
      secondName: this.secondNameRef.nativeElement.value,
      age: this.ageRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      password: this.passwordRef.nativeElement.value, 
    }
    this._userService.onAddUser(userNew);
  }

}

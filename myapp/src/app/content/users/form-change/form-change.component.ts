import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';
import { User } from 'src/app/common/model/user.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-form-change',
  templateUrl: './form-change.component.html',
  styleUrls: ['./form-change.component.css']
})
export class FormChangeComponent implements OnInit {

  user:User; 
  userChanged:User;  
  fullFormControl:FormGroup;
  validAgeInput:boolean = true;
  validEmailInput:boolean = true;
  validPasswordInput:boolean = true;
  successChange:boolean;

  constructor(
    private _userService:UsersService,
    public bsModalRef: BsModalRef) { }

  ngOnInit(){
    
    this.userChanged = this.user;
    this.fullFormControl = new FormGroup({
      nameControl : new FormControl(this.user.name,[]),
      surnameControl : new FormControl(this.user.surname,[]),
      ageControl : new FormControl(this.user.age,[ageValidator]),
      emailControl : new FormControl(this.user.email,[Validators.required,emailValidator]),
      passwordControl : new FormControl(this.user.password,[Validators.minLength(3),Validators.required]),
    });
    
    this.fullFormControl.valueChanges.subscribe(
      (value)=>{ 
        this.successChange = false; 
        const pattern:RegExp = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if(value.emailControl!==this.user.email){
          if(pattern.test(value.emailControl)) this.validEmailInput = true;
            else this.validEmailInput = false;          
        } else this.validEmailInput = true;
        if(value.passwordControl!==this.user.password){
          if(value.passwordControl.toString().length >2) this.validPasswordInput = true;
            else this.validPasswordInput = false;
        } else this.validPasswordInput = true;
        if(value.ageControl.toString().length >2) this.validAgeInput = false;
         else this.validAgeInput = true;
      }
    );
  }

  onChangeAnyUser(){
    this.successChange = false;  
    if(this.fullFormControl.valid){
     let userChanged:User = new User(
      this.fullFormControl.value.nameControl,
      this.fullFormControl.value.surnameControl,
      this.fullFormControl.value.ageControl,
      this.fullFormControl.value.emailControl, 
      this.fullFormControl.value.passwordControl);  
    this._userService.onChangeUser(this.userChanged,userChanged);
    this.successChange = true;   
    }
  }

}

function emailValidator(formControl:FormControl){
  let pattern:RegExp = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  if(!pattern.test(formControl.value)) 
    return {emailValidator:{message:'E-mail incorrect'}};
    return null;
}
function ageValidator(formControl:FormControl){
  if(formControl.value.toString().length > 2) 
    return {ageValidator:{message:'Age incorrect'}};
    return null;
}
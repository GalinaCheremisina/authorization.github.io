import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/common/model/user.model';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit  {

  newuser:User;
  fullFormControl:FormGroup;
  validEmailInput:boolean = false;
  validPasswordInput:boolean = false;
  successChange:boolean;

  constructor(
    private _userService:UsersService,
    public bsModalRef: BsModalRef) { }

  ngOnInit(){
    
    this.fullFormControl = new FormGroup({
      nameControl : new FormControl(),
      surnameControl : new FormControl(),
      ageControl : new FormControl('',[Validators.maxLength(2)]),
      emailControl : new FormControl('',[Validators.required,emailValidator]),
      passwordControl : new FormControl('',[Validators.minLength(3),Validators.required]),
    });
    this.fullFormControl.valueChanges.subscribe(
      (value)=>{ 
        const pattern:RegExp = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if(pattern.test(value.emailControl)) this.validEmailInput = true;
            else this.validEmailInput = false;
        if(value.passwordControl.toString().length >2) this.validPasswordInput = true;
            else this.validPasswordInput = false;
      }
    );
  }

  onAddAnyNewuser(){
    if(this.fullFormControl.valid){
     let userNew:User = new User(
      this.fullFormControl.value.nameControl,
      this.fullFormControl.value.surnameControl,
      this.fullFormControl.value.ageControl,
      this.fullFormControl.value.emailControl, 
      this.fullFormControl.value.passwordControl); 
      this._userService.onAddUser(userNew);
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
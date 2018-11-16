import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsersService } from 'src/app/common/service/users.service';
import { User } from 'src/app/common/model/user.model';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import { FormChangeComponent } from './form-change/form-change.component';
import { FormAddComponent } from './form-add/form-add.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  userChanging:User;
  onChange:boolean = false;
  onAdd:boolean = false;
  bsModalRef: BsModalRef;
  constructor(
    private _userService:UsersService,
    private _modalService: BsModalService) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
    this._userService.usersChanged.subscribe(
      (users:User[])=>{
        this.users = users;
        this.onAdd = false;
        this.onChange = false;
      }
    );
  }
  isActived(user:User):boolean{
    return this._userService.userIsActive(user);
  }
  inDeleteUser(user:User){
    this._userService.onDeleteUser(user);
  }
  inChangeUser(user:User){
    this.userChanging = user;
    if(this.isActived(user)) this._userService.goToPage();
    this.onChange = true;
  }
  inAddUser(){
    this.bsModalRef = this._modalService.show(FormAddComponent); 
  }
  public openModal(modalWindow: TemplateRef<string>){
    //this.modalRef = this._modalService.show(modalWindow);
  }
  openModalWithComponent(userChek:User){
    const initialState = {
      user: {
        name: userChek.name,
        surname: userChek.surname,
        age: userChek.age,
        email: userChek.email,
        password: userChek.password,
      }
    };
    this.bsModalRef = this._modalService.show(FormChangeComponent, {initialState});
  }

}

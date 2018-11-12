import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userChecked:IUser;
  usersChanged = new EventEmitter<IUser[]>();

  private users:IUser[] = [
    {
      name: "Ivan",
      surname: "Petrov",
      secondName: "Ivanovich",
      age: 28,
      email: "ivan@mail.ru",
      password: "45www", 
    },
    {
      name: "admin",
      surname: "admin",
      secondName: "admin",
      age: 28,
      email: "admin@mail.ru",
      password: "111", 
    }
  ];
  constructor(private _router:Router) { }

  getUsers():IUser[]{
    return this.users.slice();
  }
  goToPage():void{
    this._router.navigate(['profile']);
  }
  userFind(username:string,password:string):number{
    for (let i = 0; i <= this.users.length+1 ; i++) {
      if (this.users[i].email === username && this.users[i].password === password) return i;
    }
    return (-1);
  }
  userLogin(username:string,password:string):boolean{
    let index = this.userFind(username,password);
    if(index<0){
      return false;
    }else{
      this.userChecked = this.users[index];
      return true;
    }

  }
  userChange(userChanged:IUser){
    this.userChecked.name = userChanged.name;
    this.userChecked.surname = userChanged.surname;
    this.userChecked.secondName = userChanged.secondName;
    this.userChecked.age = userChanged.age;
    this.userChecked.email = userChanged.email;
    this.userChecked.password = userChanged.password;
    this.usersChanged.emit(this.users.slice());
    console.log(this.users);
  }
  userIsActive(user:IUser):boolean{
    if(user.name === this.userChecked.name && user.password ===this.userChecked.password)
    return true;
    return false;
  }
  onDeleteUser(user:IUser){
    let index = this.userFind(user.email,user.password);
    if(index<0){
      return false;
    }else{
      this.users.splice(index,1);
      this.usersChanged.emit(this.users.slice());
      return true;
    }
  }
  onChangeUser(user:IUser):boolean{
    let index = this.userFind(user.email,user.password);
    if(index<0){
      return false;
    }else{
      for (let key in this.users[index]) {
        this.users[index][key] = user[key];
      }
      this.usersChanged.emit(this.users.slice());
      return true;
    }

  }
  onAddUser(userNew:IUser){
    this.users.push(userNew);
    this.usersChanged.emit(this.users.slice());
  }

}

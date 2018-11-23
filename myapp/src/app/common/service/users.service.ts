/**
 * The service works users
 * @constructor
 * @param {User[]} users - The private array of users
 * @param {User} userChecked - The active user
 * @param {EventEmitter<boolean>} userLogged - The event that works when a user has logged in
 * @param {EventEmitter<User[]>} usersChanged - The event that works when a user has changed
 * @function {User[]} getUsers() - The public array of users
 * @function {void} goToPage()  - The page navigation
 * @function {number} userFind()  - The position where user is
 * @function {boolean} userLogin() - It checks for user existence 
 * @function {boolean} userIsActive() - It checks for user activity 
 * @function {void} activeUserChange() - It changes the active user
 * @function {boolean} onChangeUser() - It changes any user 
 * @function {boolean} onDeleteUser() - It removes any user 
 * @function {void} onAddUser() - It adds a new user 
 * @function {void} inLogOut() - User log out 
 */
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:User[] = [
    new User("Ivan","Petrov",28,"ivan@mail.ru","111"),
    new User("admin","admin",20,"admin@mail.ru","111"),
    new User("Lida","Penova",21,"zzz@mail.ru","111"),
    new User("Sergey","Konyahin",38,"xxx@mail.ru","111"),
    new User("Olga","Lilova",19,"ccc@mail.ru","111")];

  userChecked: User;
  userLogged = new EventEmitter<boolean>();
  usersChanged = new EventEmitter<User[]>();

  constructor(private _router:Router) { }

  getUsers():User[]{
    return this.users.slice();
  }

  goToPage():void{
    this._router.navigate(['profile']);
  }

  userFind(username:string,password:string):number{
    for (let i = 0; i < this.users.length ; i++) {
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
      this.userLogged.emit(true);
      return true;
    }

  }

  userIsActive(user:User):boolean{
    if(user.name === this.userChecked.name && user.password ===this.userChecked.password)
    return true;
    return false;
  }

  activeUserChange(userChanged:User):void{
    this.userChecked.name = userChanged.name;
    this.userChecked.surname = userChanged.surname;
    this.userChecked.age = userChanged.age;
    this.userChecked.email = userChanged.email;
    this.userChecked.password = userChanged.password;
    this.usersChanged.emit(this.users.slice());
  }

  onChangeUser(userChanged:User,user:User):boolean{
    let index = this.userFind(userChanged.email,userChanged.password);
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

  onDeleteUser(user:User):boolean{
    let index = this.userFind(user.email,user.password);
    if(index<0){
      return false;
    }else{
      this.users.splice(index,1);
      this.usersChanged.emit(this.users.slice());
      return true;
    }
  }

  onAddUser(userNew:User):void{
    this.users.push(userNew);
    this.usersChanged.emit(this.users.slice());
  }
  
  inLogOut():void{
    this.userChecked = new User();
    this.userLogged.emit(false);
    this._router.navigate(['']);
  }

}

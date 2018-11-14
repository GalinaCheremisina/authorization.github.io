/**
 * The user's class
 * @constructor
 */
export class User{
    public name: string;
    public surname: string;
    public secondName: string;
    public age: number;
    public email: string;
    public password: string

    constructor(
        name?: string,
        surname?: string,
        secondName?: string,
        age?: number,
        email?: string,
        password?: string){
            name? this.name = name : this.name = '';
            surname? this.surname = surname : this.surname = '';
            secondName? this.secondName = secondName : this.secondName = '';
            age? this.age = age : this.age = 1;
            email? this.email = email : this.email = '';
            password? this.password = password : this.password = '';
        }
}
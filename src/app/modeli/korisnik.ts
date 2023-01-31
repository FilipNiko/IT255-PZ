export class Korisnik{
    id: number;
    username: string;
    email: string;
    password: string;
    admin: boolean;

    constructor(username: string, email: string, password: string, admin: boolean){
        this.username= username;
        this.email= email;
        this.password= password;
        this.admin= admin;

    }
}
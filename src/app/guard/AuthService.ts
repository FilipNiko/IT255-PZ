import { Injectable } from '@angular/core';
import { Korisnik } from '../modeli/korisnik';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    upisiKorisnika(korisnik: Korisnik): void {
        localStorage.setItem("username", korisnik.username);
        localStorage.setItem("id", String(korisnik.id));
        localStorage.setItem("admin", String(korisnik.admin));
    }

    logout(): any {
        localStorage.removeItem('username');
    }

    getUser(): any {
        return localStorage.getItem('username');
    }

    getIdKorisnika(): any {
        return localStorage.getItem('id');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }

    isAdmin(): boolean {

        if (this.isLoggedIn()) {
            if (localStorage.getItem('admin') == "true") {
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }


    }
}

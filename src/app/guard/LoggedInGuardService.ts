import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './AuthService';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private authService: AuthService) {}
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        const isLoggedIn = this.authService.isLoggedIn();
        console.log('canActivate', isLoggedIn);
        return isLoggedIn;
    }
}
import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './AuthService';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        const isAdmin = this.authService.isAdmin();
        console.log('canActivate', isAdmin);
        return isAdmin;
    }
}
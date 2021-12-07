import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth_service: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.auth_service.isAuth()
        .then(() => true)
        .catch(() => {
            this.router.navigate(['/403'])
            return false;
        })
    }
}
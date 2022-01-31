import { Injectable } from "@angular/core";
import { LoginService } from "../components/login/login.service";

@Injectable()
export class AuthService{
    constructor(private login_service: LoginService){}

    isAuth(){
        return new Promise((resolve, reject) => {
            let is_auth = !!this.login_service.auth_user || sessionStorage.getItem('is_auth');
            
            if(is_auth){
                resolve(true)
            }
            else{
                reject(false)
            }
        })
    }
}
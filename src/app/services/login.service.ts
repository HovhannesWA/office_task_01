import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

interface IAuth_user {
  id: number,
  first_name: string,
  last_name: number,
  gender: string,
  age: number,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  auth_user: IAuth_user | null = null
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.get('http://localhost:3000/users')
      .pipe(delay(1500))
      .subscribe(data => {
        // *******************************************************
        let logined_user = this.checkUser(data, email, password)
        // *******************************************************
        if(logined_user){                     
          resolve(this.auth_user)
        }
        else{
          reject('dont find')
        }
      })
    })
  }

  logOut(){
    this.auth_user = null;
  }

  checkUser(db: any, email: string, password: string){
    let logined_user = db.find((user:{email: string,password:string}) => {
      return user.email === email && user.password === password
    })
    if(logined_user){
      this.auth_user = logined_user;      
    }
    return !!logined_user
  }
}

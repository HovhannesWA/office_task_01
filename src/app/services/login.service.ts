import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { delay, catchError, map } from 'rxjs/operators';

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
    return this.httpClient.get('http://localhost:3000/rrusers')    
    .pipe(
      delay(1000),
      map(data => {
        if(this.checkUser(data, email, password)){
          return this.auth_user;
        }
        else{
          return false;
        }
      }),
      catchError(this.handleError)
      )        
  }

  logOut(){
    this.auth_user = null;
  }

  registration(data: {}){
    return new Promise((resolve, reject) => {
      this.httpClient.post('http://localhost:3000/users', data)
      .pipe(delay(1000)) 
      .subscribe({
        next: response => resolve(response),
        error: err => reject(err)
      })
    })
    
  }

  checkUser(db: any, email: string, password: string){
    let logined_user = db.find((user:{email: string,password:string}) => {
      return user.email === email && user.password === password
    })
    if(logined_user){
      this.auth_user = logined_user;
      sessionStorage.setItem('is_auth', '1');
    }
    return !!logined_user
  }

  private handleError(err: HttpErrorResponse | any){
    console.log(err);
    return err;
  }
}

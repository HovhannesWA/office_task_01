import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError, Observable } from "rxjs";



@Injectable()
export class UsersService{
    constructor(private http: HttpClient){
        
    }

    getUsers(){
        return this.http.get('http://localhost:3000/users')        
        .pipe(catchError((err: HttpErrorResponse) => {
            console.log(err.status)
            return throwError('somthing went wrong')
        }))
    }

    addUser(){
        return this.http.post('http://localhost:3000/users', 
        { "first_name": "Mared", "last_name": "Hayward", "gender": "female", "age": "30" })
    }
}
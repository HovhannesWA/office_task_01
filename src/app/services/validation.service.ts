import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  validators: string[] = ['required', 'email']

  constructor() { }

  require(value: any){
    return !!value;
  }

  email(value: string){
    let email_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regexp.test(value);
  }

  minLength(value: string, min_length: number){
    return value.length >= min_length;
  }

  maxLength(value: string, max_length: number){
    return value.length <= max_length;
  }

  minValue(value: number, min_value: number){
    return value >= min_value
  }

  maxValue(value: number, max_value: number){
    return value <= max_value
  }

  sameAs(value:any,example:any){    
    return value === example
  }
}

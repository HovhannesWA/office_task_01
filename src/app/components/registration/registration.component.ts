import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registration_data: any = {
    first_name: '',
    last_name: '',
    email: '',
    gender: 'male',
    password: '',
    comfirm_password: '',
  };

  validation_errors: any = {
    first_name: [],
    last_name: [],
    email: [],
    gender: [],
    password: [],
    comfirm_password: [],
  };

  constructor(private validation_service: ValidationService) {}

  ngOnInit(): void {}

  register() {
    if(!this.formIsValid()){
      return;
    }
  }

  formIsValid(){
    for(let key in this.validation_errors){
      this.validation_errors[key] = [];
    }
    for(let key in this.registration_data){
      if(!this.registration_data[key]){
        this.validation_errors[key] = []
        this.validation_errors[key].push('required')
      }
    }

    if(!this.validation_service.email(this.registration_data.email)){
      this.validation_errors.email.push('email')
    }

    if(!this.validation_service.sameAs(this.registration_data.comfirm_password, this.registration_data.password)){
      this.validation_errors.comfirm_password.push('sameAs')
    }

    return false;
  }
}

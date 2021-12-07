import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/services/loader.service';
import { LoginService } from 'src/app/services/login.service';
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

  hide_component: boolean = false;

  constructor(
    private validation_service: ValidationService,
    private loader_service: LoaderService,
    private login_service: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register(event: any) {
    if (!this.formIsValid()) {
      return;
    }
    this.loader_service.showButtonLoader(event.currentTarget);
    this.login_service.registration(this.registration_data)
    .then((data) => {
      console.log(data);
      this.toastr.success(`Registration completed successfully`);
      
      setTimeout(() => this.hide_component = true, 1000)
      setTimeout(() => this.router.navigate(['/login']),1500)
    })
    .catch(err => console.log(err))
    .finally(() => this.loader_service.hideButtonLoader())
  }

  formIsValid() {
    for (let key in this.validation_errors) {
      this.validation_errors[key] = [];
    }
    for (let key in this.registration_data) {
      if (!this.registration_data[key]) {
        this.validation_errors[key] = [];
        this.validation_errors[key].push('required');
      }
    }

    if (!this.validation_service.email(this.registration_data.email)) {
      this.validation_errors.email.push('email');
    }

    if (
      !this.validation_service.sameAs(
        this.registration_data.comfirm_password,
        this.registration_data.password
      )
    ) {
      this.validation_errors.comfirm_password.push('sameAs');
    }

    let is_valid = true;
    for (let key in this.validation_errors) {
      if (this.validation_errors[key].length) {
        is_valid = false;
      }
    }
    return is_valid;
  }
}

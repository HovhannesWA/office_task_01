import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/services/loader.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  email: AbstractControl | null = this.form.get('email');
  password: AbstractControl | null = this.form.get('password');
  remember_me: boolean = false;
  touched: boolean = false;

  constructor(
    private login_service: LoginService,
    private loader_service: LoaderService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      remeber_me_checkbox: new FormControl(''),
    });
  }

  async login(event: { currentTarget: any }) {
    this.touched = true;
    this.form.markAsTouched();
    this.loader_service.showButtonLoader(event.currentTarget);
    let form_is_valid = this.checkFormValidation();
    let email = this.form.get('email')?.value;
    let password = this.form.get('password')?.value;
    if (!form_is_valid) {
      this.loader_service.hideButtonLoader();
      return;
    } else if (typeof email !== 'string' || typeof password !== 'string') {
      this.loader_service.hideButtonLoader();
      return;
    } else {
      this.login_service.login(email, password).subscribe((login_success: any) => {
        console.log(login_success);
        if (login_success) {
          this.toastr.success(`welcome ${login_success.first_name} ${login_success.last_name}`);
          this.router.navigate(['/home']);
          this.loader_service.hideButtonLoader();
        }
        else{
          this.loader_service.hideButtonLoader();
        }
      });      
    }
  }

  checkFormValidation(): boolean {
    if (this.form.status === 'VALID') {
      return true;
    } else {
      return false;
    }
  }
}

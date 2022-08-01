import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Route, Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/loginResponse';
import { AuthService } from 'src/app/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private notification: NzNotificationService, private authService: AuthService, private router: Router) { }
  validateForm!: FormGroup;
  isLoad = false;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    console.log(this.validateForm.value, this.validateForm.valid)
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],


    });
  }

  login() {
    this.isLoad = true;
    this.authService
      .login(this.validateForm.value.email, this.validateForm.value.password)
      .subscribe({
        next: (response) => {
          setTimeout(() => {
            this.isLoad = false;
          }, 5000);
          console.log(response)
          this.loginSuccess(response);
          // this.isLoad = false;
        },
        error: (errors) => {
          this.isLoad = false;
          console.log(errors);

          this.notification.create("error", "Message d'erreur", errors.error.message, {
            nzDuration: 5000
          });
        },
      });
  }
  private loginSuccess(response: LoginResponse) {
    console.log("RESPONSE:", response.data.token);
    this.authService.setToken(response.data.token);
    this.authService.setUser(response.data.user);
    this.router.navigate(['/user/quizzes'])
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/loginResponse';
import { AuthService } from 'src/app/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoad = true;
  validateForm!: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [
        null,
        [Validators.required],
      ],
      password: [
        null,
        [Validators.required],
      ],
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  login() {

    this.isLoad = true;
    this.authService
      .login(this.validateForm.value.email, this.validateForm.value.password)
      .subscribe({
        next: (response) => {
          this.loginSuccess(response);
          this.isLoad = false;
        },
        error: (errors) => {
          this.isLoad = false;
          this.notification.create("error", "Message d'erreur", errors.error.message, {
            nzDuration: 5000
          });
        },
      });

    this.router.navigate(['']);

  }

  private loginSuccess(response: LoginResponse) {
    this.authService.setToken(response.token.accessToken);
    this.authService.setUser(response.user);
    this.authService.setUserPermissions(response.user)
    this.router.navigate(['user/dashboard'])
  }

}

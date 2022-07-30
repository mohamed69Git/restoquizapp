import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/loginResponse';
import { Base } from '../shared/base';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends Base {
  // private endPoint = env.api
  // private httpClient!: HttpClient
  protected override _baseUrl: string = 'admin/';
  constructor(private h: HttpClient, private router: Router) {
    super();
    this.httpClient = h;
  }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(
      this.endPoint + 'login',
      {
        email: email,
        password: password,
      },
      {
        headers: this.guestHeaders,
        observe: 'body',
      }
    );
  }

}

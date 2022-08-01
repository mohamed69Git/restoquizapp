import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/loginResponse';
import { Base } from '../shared/base';
import { Router } from '@angular/router';
import { Candidat } from '../models/candidat';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends Base {
  // private endPoint = env.api
  // private httpClient!: HttpClient
  protected override _baseUrl: string = '';
  constructor(protected h: HttpClient, protected router: Router) {
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

  register(candidat: Candidat) {
    return this.http.post<Candidat>(
      this.endPoint + 'register',
      {
        name: candidat.name,
        email: candidat.email,
        password: candidat.password,
      },
      {
        headers: this.guestHeaders,
        observe: 'body',
      }
    );
  }
  checkAuthentication() {
    if (this.isLogIn()) {
      const user = this.getUser();
      if (user == null) {
        this.logout();
        this.router.navigate(['/auth/login']);
      } else {
        this.router.navigate(['/user/quizzes']);
      }
    }
  }



}

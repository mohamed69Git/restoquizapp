import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../models/quiz';
import { Base } from '../shared/base';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Base {
  protected override _baseUrl = '';
  constructor(protected h: HttpClient, protected router: Router,) {
    super();
    this.httpClient = h;

  }

  getquizzes() {
    return this.httpClient.get<Quiz[]>(this.endPoint + 'quiz');
  }
}

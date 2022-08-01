import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authService: AuthService) {

  }

  isLogin() {
    console.log(this.authService.isLogIn())
    return this.authService.isLogIn()
  }
}

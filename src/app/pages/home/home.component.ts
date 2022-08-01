import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  demarrer() {
    if (this.authService.isLogIn())
      this.route.navigate(['/user/quizzes'])
    else
      this.route.navigate(['/home'])
  }

}

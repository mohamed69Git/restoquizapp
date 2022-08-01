import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  checkbox = false;
  quizzes!: Quiz[];
  quizzesDone!: Quiz[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllQuizzes()
  }

  setQuiz(value: any) {
    console.log("Valeur ", value)
    //En cours
  }

  getAllQuizzes() {
    this.userService.getquizzes().subscribe({
      next: (response) => {
        this.quizzes = response
        this.quizzes.forEach(element => {
          element.questions.forEach(element2 => {
            element2.reponses.forEach(element3 => {
              console.log(element3)
            })
          });
        });

      },
      error: (errors) => {
        console.log(errors);
      }
    })
  }
}

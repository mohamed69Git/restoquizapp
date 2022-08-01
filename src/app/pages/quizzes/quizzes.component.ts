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
    // this.quizzesDone.push({id: '', })
    this.getAllQuizzes()
  }

  setQuiz(quiz: Quiz, value: number) {
    console.log("Valeur ", value)
  }

  getAllQuizzes() {
    this.userService.getquizzes().subscribe({
      next: (response) => {
        this.quizzes = response
        this.quizzes.forEach(element => {
          element.questions.forEach(element2 => {
            // console.log(element2.reponses)
            element2.reponses.forEach(element3 => {
              console.log(element3)
            })
          });
        });
        // console.log(response);

      },
      error: (errors) => {
        console.log(errors);
      }
    })
  }
}

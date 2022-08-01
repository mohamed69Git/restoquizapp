import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesComponent } from 'src/app/pages/quizzes/quizzes.component';
import { UserRoutingModule } from './user.routing.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';


@NgModule({
  declarations: [QuizzesComponent],
  imports: [
    CommonModule,
    NzRadioModule,
    UserRoutingModule,
    NzCheckboxModule,
    FormsModule
  ]
})
export class UserModule { }

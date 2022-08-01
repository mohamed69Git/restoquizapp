import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from 'src/app/pages/quizzes/quizzes.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'quizzes' },
  { path: 'quizzes', component: QuizzesComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

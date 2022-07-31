import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthuserComponent } from 'src/app/pages/authuser/authuser.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login-register' },
  { path: 'login-register', component: AuthuserComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
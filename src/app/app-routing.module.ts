import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './modules/user/user.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home', component: HomeComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {

    path: 'auth', loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule)

  },
  {
    path: 'user', component: UserComponent, children: [
      {
        path: '', loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule)
      }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

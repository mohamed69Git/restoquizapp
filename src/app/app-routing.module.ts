import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'auth', component: AuthComponent, children: [
      {
        path: '', loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: '', loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule)
      }
    ]
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

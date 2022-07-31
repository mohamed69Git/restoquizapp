import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { AuthComponent } from './auth.component';
import { AuthuserComponent } from 'src/app/pages/authuser/authuser.component';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from 'src/app/pages/authuser/login/login.component';
import { RegisterComponent } from 'src/app/pages/authuser/register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    AuthuserComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzCardModule,
    NzTabsModule,
    NzSelectModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }

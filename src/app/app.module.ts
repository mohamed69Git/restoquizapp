import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { UserComponent } from './modules/user/user.component';
import { HomeComponent } from './modules/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    UserComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    NzButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NzNotificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
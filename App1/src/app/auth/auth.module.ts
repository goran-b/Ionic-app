import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthPageRoutingModule
  ],
  declarations: [
    AuthPage,
    LoginComponent, 
    SignUpComponent]
})
export class AuthPageModule { }

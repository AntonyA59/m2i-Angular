import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent],
  imports: [CommonModule, AuthenticationRoutingModule, ReactiveFormsModule],
  bootstrap: [LoginComponent],
})
export class AuthenticationModule {}

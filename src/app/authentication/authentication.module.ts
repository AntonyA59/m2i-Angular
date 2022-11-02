import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthenticationRoutingModule, ReactiveFormsModule],
  bootstrap: [LoginComponent],
})
export class AuthenticationModule {}

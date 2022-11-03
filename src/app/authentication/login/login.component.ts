import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/interface/status';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthComponent } from 'src/app/auth/auth.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  user?: User;
  statut?: Status;
  constructor(private authService: AuthService, private auth: AuthComponent) {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    this.authService
      .connectUser(this.loginForm.value as User)
      .subscribe((response) => {
        if (this.authService.isUser(response)) {
          this.user = response;
        }
        if (this.authService.isStatut(response)) {
          this.auth.notif = response;
        }
      });
  }
  init() {
    this.authService.getUser().subscribe((response) => {
      this.user = response;
    });
  }
  ngOnInit(): void {
    this.init();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/interface/status';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

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
  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {}

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
          this.authService.saveCurrentUser({
            connected: true,
            user: response,
          });
        }
        if (this.authService.isStatut(response)) {
          this.alertService.envoyerStatus(response);
        }
        sessionStorage.setItem('connected', 'true');
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

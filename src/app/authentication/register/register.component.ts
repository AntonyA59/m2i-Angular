import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/interface/status';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  user?: User;
  statut?: Status;
  constructor(private authService: AuthService) {}
  get f() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    this.authService
      .registerUser(this.registrationForm.value as User)
      .subscribe((response) => {
        if (this.authService.isUser(response)) {
          this.user = response;
          this.submitted = true;
        }
        if (this.authService.isStatut(response)) {
          this.statut = response;
        }
      });
  }
  ngOnInit(): void {}
}

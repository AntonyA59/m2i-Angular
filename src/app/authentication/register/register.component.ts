import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private authService: AuthService) {}
  get f() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    this.submitted = true;
    this.authService.registerUser(this.registrationForm.value as User);
  }
  ngOnInit(): void {}
}

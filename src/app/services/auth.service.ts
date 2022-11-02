import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  urlLogin = 'https://data.snx.ovh/login.php';
  urlRegister = 'https://data.snx.ovh/register.php';
  connectUser(user: User) {
    this.http.post(this.urlLogin, user, httpOptions).subscribe();
  }

  registerUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.urlRegister, user);
  }
}

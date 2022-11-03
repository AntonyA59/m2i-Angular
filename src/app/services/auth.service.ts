import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { Status } from '../interface/status';

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

  getUser(): Observable<User> {
    return this.http.get<User>(this.urlLogin, {
      withCredentials: true,
    });
  }

  connectUser(user: Partial<User | Status>): Observable<User | Status> {
    return this.http.post<User | Status>(this.urlLogin, user, {
      withCredentials: true,
    });
  }

  registerUser(user: Partial<User | Status>): Observable<User | Status> {
    return this.http.post<User | Status>(this.urlRegister, user);
  }

  isUser(obj: any): obj is User {
    return (
      'id' in obj &&
      'username' in obj &&
      'password' in obj &&
      'email' in obj &&
      'registered' in obj
    );
  }

  isStatut(obj: any): obj is Status {
    return 'response' in obj && 'type' in obj;
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interface/user';
import { Status } from '../interface/status';
import { AuthStatus } from '../interface/authStatus';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private curUser = new BehaviorSubject<AuthStatus>({
    connected: false,
  });

  curUserObs$ = this.curUser.asObservable();

  urlLogin = 'https://data.snx.ovh/login.php';
  urlRegister = 'https://data.snx.ovh/register.php';
  urlLogout = 'https://data.snx.ovh/logout.php';
  constructor(private http: HttpClient) {}

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

  logout(): Observable<Status> {
    return this.http.get<Status>(this.urlLogout, { withCredentials: true });
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

  saveCurrentUser(curUser: AuthStatus) {
    this.curUser.next(curUser);
  }

  isConnected() {
    return this.curUser.value.connected;
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthStatus } from '../interface/authStatus';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {
  sub: Subscription = new Subscription();
  user!: AuthStatus;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.sub = this.authService.curUserObs$.subscribe((response) => {
      this.user = response;
    });

    if (sessionStorage.getItem('connected') === 'true') {
      this.authService.getUser().subscribe((response) => {
        if (this.authService.isUser(response)) {
          this.authService.saveCurrentUser({
            connected: true,
            user: response,
          });
        } else {
          sessionStorage.setItem('connected', 'false');
        }
      });
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/interface/status';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  statut?: Status;
  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {}
  logout() {
    this.authService.logout().subscribe((response) => {
      this.alertService.envoyerStatus(response);
    });
    this.authService.saveCurrentUser({
      connected: false,
      user: undefined,
    });
  }
  ngOnInit(): void {
    this.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/interface/status';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  statut?: Status;
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout().subscribe((response) => {
      this.statut = response;
    });
  }
  ngOnInit(): void {
    this.logout();
  }
}

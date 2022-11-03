import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/interface/status';
import { User } from 'src/app/interface/user';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  statut?: Status;
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private profilService: ProfilService
  ) {}
  logout() {
    this.authService.logout().subscribe((response) => {
      this.alertService.envoyerStatus(response);
    });
    this.profilService.envoyerProfil({} as User);
  }
  ngOnInit(): void {
    this.logout();
  }
}

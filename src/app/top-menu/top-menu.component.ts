import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../interface/user';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {
  sub: Subscription = new Subscription();
  user!: User;
  constructor(private profilService: ProfilService) {}

  ngOnInit(): void {
    this.sub = this.profilService.profilObs$.subscribe((response) => {
      this.user = response;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

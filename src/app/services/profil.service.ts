import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  private profil = new Subject<User>();
  profilObs$ = this.profil.asObservable();
  constructor() {}

  envoyerProfil(user: User) {
    this.profil.next(user);
  }
}

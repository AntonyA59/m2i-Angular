import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Status } from '../interface/status';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private notification = new Subject<Status>();
  notificationObs$ = this.notification.asObservable();

  constructor() {}
  envoyerStatus(status: Status) {
    this.notification.next(status);
  }
}

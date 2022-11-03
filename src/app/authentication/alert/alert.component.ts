import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sample, Subscription } from 'rxjs';
import { Status } from 'src/app/interface/status';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  sub: Subscription = new Subscription();
  constructor(private alertService: AlertService) {}
  status!: Status;
  ngOnInit(): void {
    this.sub = this.alertService.notificationObs$.subscribe((status) => {
      this.status = status;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  closeAlert(): void {
    this.alertService.envoyerStatus({
      response: '',
      type: 'info',
    });
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/interface/status';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() notification: Status = {} as Status;
  @Output() closeEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Status } from '../interface/status';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  notif!: Status;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Apis } from '../interface/apis';
import { ApisModel } from '../interface/apisModel';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
})
export class APIsComponent implements OnInit {
  apis!: ApisModel;

  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.apisService.getApis().subscribe((apisFromService) => {
      this.apis = apisFromService;
    });
  }
}

import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Apis } from '../interface/apis';
import { ApisCategorie } from '../interface/apisCategorie';
import { ApisModel } from '../interface/apisModel';
import { ApisModelCategories } from '../interface/apisModelCategories';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
})
export class APIsComponent implements OnInit {
  apis: Apis[] = [];
  apisCategories: ApisCategorie[] = [];

  constructor(private apisService: ApisService) {}

  getEntriesPerCategory(categories: string) {
    this.apisService
      .getApisPerCategory(categories)
      .subscribe((entriesFromService) => {
        this.apis = entriesFromService;
      });
  }

  getAll() {
    this.apisService.getApisEntries().subscribe((apisFromService) => {
      this.apis = apisFromService;
    });
  }

  ngOnInit(): void {
    this.getAll();
    this.apisService.getApisEntries().subscribe;
    this.apisService
      .getApisUrlCategories()
      .subscribe((categoriesFromService) => {
        this.apisCategories = categoriesFromService;
      });
  }
}

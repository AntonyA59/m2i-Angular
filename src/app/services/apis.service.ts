import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Apis } from '../interface/apis';
import { ApisCategorie } from '../interface/apisCategorie';
import { ApisModel } from '../interface/apisModel';
import { ApisModelCategories } from '../interface/apisModelCategories';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  apisUrlEntries = 'https://api.publicapis.org/entries';
  apisUrlCategories = 'https://api.publicapis.org/categories';
  apisUrlPerCategory = 'https://api.publicapis.org/entries?Category=';

  getApisEntries(): Observable<Apis[]> {
    return new Observable<Apis[]>((subscriber) => {
      this.http.get<ApisModel>(this.apisUrlEntries).subscribe((result) => {
        subscriber.next(result.entries);
      });
    });
  }

  getApisUrlCategories(): Observable<ApisCategorie[]> {
    return new Observable<ApisCategorie[]>((subcriber) => {
      this.http
        .get<ApisModelCategories>(this.apisUrlCategories)
        .subscribe((results) => {
          let categories: ApisCategorie[] = [];
          for (let i = 0; i < results.categories.length; i++) {
            categories.push({ category: results.categories[i] });
          }
          subcriber.next(categories);
        });
    });
  }

  getApisPerCategory(categorie: string): Observable<Apis[]> {
    return new Observable<Apis[]>((subscriber) => {
      this.http
        .get<ApisModel>(this.apisUrlPerCategory + categorie)
        .subscribe((result) => {
          subscriber.next(result.entries);
        });
    });
  }
  constructor(private http: HttpClient) {}
}

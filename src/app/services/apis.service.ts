import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Apis } from '../interface/apis';
import { ApisModel } from '../interface/apisModel';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  apisUrl = 'https://api.publicapis.org/entries';

  getApis(): Observable<ApisModel> {
    return this.http.get<ApisModel>(this.apisUrl);
  }
  constructor(private http: HttpClient) {}
}

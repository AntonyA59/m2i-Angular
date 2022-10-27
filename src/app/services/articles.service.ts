import { Injectable } from '@angular/core';
import { Articles } from '../interface/articles';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articleUrl = 'http://data.snx.ovh/API.json';
  getArticle(): Observable<Articles[]> {
    return this.http.get<Articles[]>(this.articleUrl);
  }
  constructor(private http: HttpClient) {}
}

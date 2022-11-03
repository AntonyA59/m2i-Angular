import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../interface/message';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MessagerieService {
  messageUrl = 'http://data.snx.ovh/messages.php';

  getMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messageUrl, httpOptions);
  }
  addMessage(message: Partial<Message>): Observable<Message> {
    return this.http.post<Message>(this.messageUrl, message, httpOptions);
  }
  constructor(private http: HttpClient) {}
}

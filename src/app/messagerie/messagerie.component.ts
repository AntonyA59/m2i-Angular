import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mergeMap, Subscription, timer } from 'rxjs';
import { Message } from '../interface/message';
import { MessagerieService } from '../services/messagerie.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css'],
})
export class MessagerieComponent implements OnInit {
  sub: Subscription = new Subscription();
  submitted = false;
  messagerie = new FormGroup({
    pseudo: new FormControl('', [Validators.minLength(3), Validators.required]),
    message: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
  });
  messages: Message[] = [];
  myTimer = timer(0, 5000);

  get f() {
    return this.messagerie.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.messagerie.invalid) {
      return;
    }
    this.messagerieService.addMessage(this.messagerie.value as Message);
    this.messagerie.controls['message'].reset();
  }
  init() {
    this.sub = this.myTimer
      .pipe(mergeMap(() => this.messagerieService.getMessage()))
      .subscribe((message) => (this.messages = message));
  }
  constructor(private messagerieService: MessagerieService) {}

  ngOnInit(): void {
    this.init();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from '../interface/message';
import { MessagerieService } from '../services/messagerie.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css'],
})
export class MessagerieComponent implements OnInit {
  messagerie = new FormGroup({
    pseudo: new FormControl(''),
    message: new FormControl(''),
  });
  messages: Message[] = [];

  onSubmit() {
    this.messagerieService.addMessage(this.messagerie.value as Message);
    this.messagerie.controls['message'].reset();
  }
  init() {
    this.messagerieService.getMessage().subscribe((messagerieFromService) => {
      this.messages = messagerieFromService;
    });
  }
  constructor(private messagerieService: MessagerieService) {}

  ngOnInit(): void {
    this.init();
  }
}

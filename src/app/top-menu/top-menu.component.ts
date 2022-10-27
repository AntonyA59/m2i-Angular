import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {
  constructor() {}
  username: string = 'Test';
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    document.getElementById('btn')?.addEventListener('click', () => {
      this.username = 'Antony';
    });
  }
}

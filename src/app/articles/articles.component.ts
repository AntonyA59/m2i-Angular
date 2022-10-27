import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles = [
    {
      title: "I don't want to be rescued.",
      content:
        "And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too," +
        "hope one day to go. The toilet. We'll need to have a look inside you with this camera. " +
        'You, minion. Lift my arm. AFTER HIM!',
      author: 'JohnDoe',
      fullname: 'Jonathan Doenuts',
      time: '10mn ago',
    },
    {
      title: "There's no part of that sentence I didn't like!",
      content:
        "You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! She also " +
        "liked to shut up! It may comfort you to know that Fry's death took only fifteen seconds, yet" +
        'the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels.',
      author: 'JohnDoe',
      fullname: 'Jonathan Doenuts',
      time: '20mn ago',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

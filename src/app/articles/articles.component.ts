import { Component, OnInit } from '@angular/core';
import { Articles } from '../interface/articles';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: Articles[] = [];

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articleService.getArticle().subscribe((articlesFromService) => {
      this.articles = articlesFromService;
    });
  }
}

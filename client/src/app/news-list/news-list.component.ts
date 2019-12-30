import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class newsListComponent implements OnInit {
  newss: Array<any>;

  constructor(private newsService: newsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe(data => {
      this.newss = data;
    });
  }
}
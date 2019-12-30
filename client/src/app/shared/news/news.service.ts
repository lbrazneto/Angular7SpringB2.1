
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NewsService {
  public API = '//localhost:8080';
  public News_API = this.API + '/newss';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/cool-newss');
  }

  get(id: string) {
    return this.http.get(this.News_API + '/' + id);
  }

  save(news: any): Observable<any> {
    let result: Observable<Object>;
    if (news['href']) {
      result = this.http.put(news.href, news);
    } else {
      result = this.http.post(this.NEWS_API, news);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
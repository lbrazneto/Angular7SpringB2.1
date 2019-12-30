import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/news-list', pathMatch: 'full' },
  {
    path: 'news-list',
    component: NewsListComponent
  },
  {
    path: 'news-add',
    component: NewsEditComponent
  },
  {
    path: 'news-edit/:id',
    component: NewsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
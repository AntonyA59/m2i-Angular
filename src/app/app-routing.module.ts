import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: 'article', component: ArticlesComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

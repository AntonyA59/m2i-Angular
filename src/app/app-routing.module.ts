import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { APIsComponent } from './apis/apis.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: 'article', component: ArticlesComponent },
  { path: 'api', component: APIsComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { APIsComponent } from './apis/apis.component';
import { ContactComponent } from './contact/contact.component';
import { MessagerieComponent } from './messagerie/messagerie.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'apis', component: APIsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'messagerie', component: MessagerieComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

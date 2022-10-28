import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ArticlesComponent } from './articles/articles.component';
import { APIsComponent } from './apis/apis.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { MessagerieComponent } from './messagerie/messagerie.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TopMenuComponent,
    ArticlesComponent,
    APIsComponent,
    ContactComponent,
    MessagerieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ArticlesComponent } from './articles/articles.component';
import { APIsComponent } from './apis/apis.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TopMenuComponent,
    ArticlesComponent,
    APIsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {AuthorService} from './author.service';
import { FormsModule } from '@angular/forms';
import { AddQuotesComponent } from './add-quotes/add-quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
    AddQuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

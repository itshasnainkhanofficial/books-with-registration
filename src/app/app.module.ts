import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import {HttpClientModule , HTTP_INTERCEPTORS} from "@angular/common/http";
import { BooksModule } from './books/books.module';
import {TokenInterceptorService} from "./user/service/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    BooksModule,
    HttpClientModule
    
  ],
  providers: [ {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

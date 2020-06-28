import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { AllBooksComponent } from './all-books/all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BookDetailsComponent } from './book-details/book-details.component';
// import { BooksDetailsComponent } from './books-details/books-details.component';


@NgModule({
  declarations: [ AllBooksComponent, AddBookComponent, BookDetailsComponent  ],

  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],

})



export class BooksModule { }

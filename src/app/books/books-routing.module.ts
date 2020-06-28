import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
// import { BooksDetailsComponent } from './books-details/books-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthGuard } from '../user/guard/auth.guard';



const routes: Routes = [
  { path: '', component: AllBooksComponent  },
  
  { path: 'addbook', component : AddBookComponent   },
  
  { path: ':id', component: BookDetailsComponent  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

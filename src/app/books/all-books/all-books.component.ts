import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Observable } from 'rxjs';
import { Books } from '../model/books';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  books$ : Observable<Books[]>;

  constructor(private bookservice : BooksService) { }


  ngOnInit(): void {

    this.books$ = this.bookservice.getBooks();

  }

}

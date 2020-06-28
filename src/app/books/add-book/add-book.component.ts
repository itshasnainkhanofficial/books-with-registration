import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm : FormGroup;

  constructor(private _bookService : BooksService , private router : Router) { }

  


  ngOnInit(): void {

    this.bookForm = new FormGroup({

      'bookName': new FormControl("abc" , [Validators.required ] ),
  
      'author': new FormControl("hasnain" , [Validators.required , Validators.minLength(5)]),
  
      'category' : new FormControl("physics" , [Validators.required]),

      'book_qty': new FormControl("5" , Validators.required)
      
  
    });
  }



  newBook(){
    if(this.bookForm.valid){

      this._bookService.addNewBook(this.bookForm.value).subscribe( 
        res => {

          console.log(res);
        this.bookForm.reset();


        this.router.navigate(["/books"]);

      },
      err =>{
        if(err.error.text){
          console.log(err.error.text)
        }
        else{
          console.log(err.error);
        }
        
      }
      )
    }
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Books } from '../model/books';
import { BooksService } from '../service/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription  } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/service/user.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit , AfterViewInit {
  id : string ;
  booksSubscription$ : Subscription;
  showForm : boolean ;
  
  books : Books ;

  

  editbook : FormGroup;
  

  constructor(

    private bookservice : BooksService ,
     private route : ActivatedRoute , 
     private router : Router,
     public _userService : UserService

     ) { }
  ngAfterViewInit(){
    
  }
  ngOnInit(): void {

    this.editbook = new FormGroup({

      'bookName': new FormControl("" , [Validators.required ] ),
  
      'author': new FormControl("" , [Validators.required , Validators.minLength(5)]),
  
      'category' : new FormControl("" , [Validators.required]),

      'book_qty': new FormControl("" , Validators.required)
      
  
    });
   

      this.id = this.route.snapshot.paramMap.get("id");

      this.booksSubscription$ = this.bookservice.getSingleBook(this.id).subscribe(books => {

      this.books = books ;
     

    });


    this.bookservice.getSingleBook(this.id).subscribe((books) => {
      
      this.editbook.patchValue({
        bookName : books.bookName,
        author :   books.author,
        category : books.category,
        book_qty : books.book_qty,
      })
    }
    
    
    )
    
   


  }

  

  showEdit(){

    
    this.showForm = !this.showForm;

    
  }

  editForm(){
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.editbook.valid){
      this.bookservice.editBook(this.editbook.value , this.id).subscribe( res => {
        console.log(res);
        this.editbook.reset();
        this.router.navigate(["/books"]);
      },
      err => {
        console.log(err.error.text);
      }
      
      )
    }
  }

  removeBook(){
    this.id = this.route.snapshot.paramMap.get("id");
    this.bookservice.deleteBook(this.id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/books"]);
      }
    )
  }


  
}

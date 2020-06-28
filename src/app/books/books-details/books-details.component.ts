import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../service/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../model/books';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit , OnDestroy {
  
  
  constructor(private bookservice : BooksService , private route : ActivatedRoute , private router : Router) { }
  id : string ;
  booksSubscription$ : Subscription;
  showForm : boolean = false;

  // pankaj bhai
    // books : any = [] ;
    // pankaj bhai
    // showBooksAuthor = false;

    books : Books;
    mybook = "hasnain";

    editbook : FormGroup;

    
    ngOnInit(): void {

      
      this.editbook = new FormGroup({
        
          bookName: new FormControl(),
        
          myproperty: new FormControl(this.mybook)

        });

        setTimeout(() => {
            
          this.editbook = new FormGroup({
    
            bookName : new FormControl(this.books.bookName)

          });
          }, 1000);
      


    // pankaj bhai
    // this.editbook = new FormGroup ({
    //   BooksArrayForm : new FormArray([])
    // })

    this.id = this.route.snapshot.paramMap.get("id");

    this.booksSubscription$ = this.bookservice.getSingleBook(this.id).subscribe(books => {

      this.books = books ;



          // pankaj bhai
      // this.patchValueToBookArrayform();

    });
    
  }
        // pankaj bhai
      // patchValueToBookArrayform(){
      //   this.books.forEach((el , index ) => {
      //     (<FormArray>this.editbook.get("BooksArrayForm")).push(el)
    
      //     if(index == (this.books.length - 1 ))
      //     this.showBooksAuthor = true 
    
      //   });
      // }



  


  // onbtnClick(){
  //   console.log(this.editbook)
  // }

  ngOnDestroy() : void {
    this.booksSubscription$.unsubscribe();
  }

  
  // showEdit(){
  //   this.showForm = !this.showForm;
  // }

  // editForm(){
  //   this.id = this.route.snapshot.paramMap.get("id");
  //   if(this.editbook.valid){
  //     this.bookservice.editBook(this.editbook.value , this.id).subscribe( res => {
  //       this.editbook.reset();
  //       this.router.navigate(["/books"]);
  //     },
  //     err => {
  //       console.log(err.error.text);
  //     }
      
  //     )
  //   }
  // }

  // removeBook(){
  //   this.id = this.route.snapshot.paramMap.get("id");

  // }
}


// 'bookName': new FormControl("abc" , [Validators.required ] ),
  
// 'author': new FormControl("hasnain" , [Validators.required , Validators.minLength(5)]),


// 'category' : new FormControl("physics" , [Validators.required]),
  
//       'book_qty': new FormControl("5" , Validators.required)
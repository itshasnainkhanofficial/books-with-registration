import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Books } from '../model/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // http option 
  private httpOption = {
    headers : new HttpHeaders().set("Content-Type" , "application/json").set("auth-token" , localStorage.getItem("token"))
    
  }
  private ROOT_URL = "http://localhost:3000/api/book";

  constructor(private http : HttpClient) { }

  getBooks() : Observable<Books[]> {

    return this.http.get<Books[]>(this.ROOT_URL);
  }

  getSingleBook(id: string){
    
    return this.http.get<Books>(`${this.ROOT_URL}/${id}`);
  }

  addNewBook(book){
    return this.http.post<Books>(this.ROOT_URL , book , this.httpOption);
  }


  editBook(book , id : string){
    return this.http.put<Books>(`${this.ROOT_URL}/${id}` , book , this.httpOption);
  }


  deleteBook(id: string){
    return this.http.delete(`${this.ROOT_URL}/${id}` , this.httpOption);
  }
}

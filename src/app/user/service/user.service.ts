import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {userLogin} from "../model/login";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROOT_URL : string = "http://localhost:3000/api/user";

  constructor(private http : HttpClient , private router : Router) { }

  register(user){
    
    return this.http.post<User>(`${this.ROOT_URL}/register` , user);
    
  }
  
  
  getUsers() : Observable<User[]> {
    
    return this.http.get<User[]>(`${this.ROOT_URL}/register`);

  }
  
  userLogin(user){
    
    return this.http.post<userLogin>(`${this.ROOT_URL}/login` , user);
    
  }

  loggedIn(){
    return !!localStorage.getItem("token");
  }
  
  userlogout(){
    localStorage.removeItem("token");
    this.router.navigate(["/books"]);
  }

  getToken(){
    return localStorage.getItem("token");
  }
}

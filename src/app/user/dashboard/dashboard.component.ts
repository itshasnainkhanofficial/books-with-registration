import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {User} from "../model/user";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  users$ : User[] ;
  
  // users$ : Observable<User[]>;

  constructor(private _userService : UserService  , private router : Router) { }

  ngOnInit(): void {

    // this.users$ = this._userService.getUsers();

    this._userService.getUsers().subscribe(
      
      res => {
        
        
        console.log(res);

        this.users$ = res ;

      },
    err =>{
      
      if(err instanceof HttpErrorResponse){

        if(err.status === 401){

          this.router.navigate(["user/login"]);

        }
        
        
      }
    }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  LoginForm : FormGroup ;
  


  constructor(private _userService : UserService , private router : Router) { }

  ngOnInit(): void {
    
    

    this.LoginForm = new FormGroup({

    
      'email': new FormControl("hasnain@gmail.com" , [Validators.required, Validators.email] ),

      'password': new FormControl("abcdef" , [Validators.required , Validators.minLength(5)]),


    });


  }




  userLogin(){
    if(this.LoginForm.valid){

      this._userService.userLogin(this.LoginForm.value).subscribe(

        res => {
          console.log(res);
          localStorage.setItem("token" , res.token);
          this.LoginForm.reset();
          this.router.navigate(["books"]);
      },
      
      err => {
          console.log(err.error.text);
      }
      
      )
    }
  
  }

  


}

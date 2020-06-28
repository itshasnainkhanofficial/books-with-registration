import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myReactiveForm : FormGroup ;
  
  notAllowedName = ["admin" , "librarian" , "reader"];
  disableBtn : boolean = false; 
  formStatus ; 
  genders = [
    {
      id: 1,
      genderType: "male"
    },
    {
      id: 2,
      genderType: "female"
    }
  ];


  constructor() { }

  ngOnInit(): void {

    this.myReactiveForm = new FormGroup({

      'userCredentials' : new FormGroup({

        'email': new FormControl("hasnain@gmail.com" , [Validators.required, Validators.email] ),
        // , this.naEmail
        'password': new FormControl("abcdef" , [Validators.required , Validators.minLength(5)]),
        
      }),

      'username' : new FormControl("hasnain" , [Validators.required ,Validators.minLength(3), this.naNames.bind(this)]),
      'cpassword': new FormControl("abcdef" , Validators.required),
      // 'user_role' : new FormControl("" , Validators.required),
      'user_role' : new FormControl("admin"),
      'gender': new FormControl("male")

    });

    // this.myReactiveForm.statusChanges.subscribe(
    //   (status) => {
    //     if(status === "VALID"){

    //       this.disableBtn = false;
    //       this.formStatus = status;
    //     }

    //     else{

    //       this.disableBtn = true;
    //       this.formStatus = status;

    //     }
    //   }
    // );

  }





  onSubmit(){
    console.log(this.myReactiveForm.value);
    alert("form submited");
  }

  naNames(control : FormControl){

    if(this.notAllowedName.indexOf(control.value) !== -1){
      return { "notallowedname"  : true }
    }
    return null ;
  }
  
  // naEmail(control : FormControl) : Promise<any> | Observable<any>{

  //   const emailResponse  = new Promise<any>((resolve,reject) => {
  //     setTimeout(() => {
  //       if(control.value === "admin@gmail.com"){
          
  //         resolve({"emailnotallowed" : true})
  //       }
  //       else{
  //         resolve(null)
  //       }
  //     }, 1500);
  //   })

  //   return emailResponse;
  // }

}

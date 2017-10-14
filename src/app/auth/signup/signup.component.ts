import { Component, OnInit } from '@angular/core';
import { formAnimation } from '../../animations/form-animation';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

//import * as firebase from 'firebase/app';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../auth.css'],
  animations: [
    formAnimation
  ]   
})

export class SignupComponent implements OnInit {

  public errorMessage = null;
  
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }
  
  onSubmitx(form){
    
      console.log('form')
      console.log(form)
      //this.angularFireAuth.createUserWithEmailAndPassword(this.uname.value,this.password.value)
      this.angularFireAuth.auth.createUserWithEmailAndPassword(form.email, form.password)
        .then((user) => {
          // this.authState = user
          // this.updateUserData()
        })
        .catch((error)=>{
          // Handle Errors here.
          // var errorCode = error.code;
          var errorMessage = error.message;
          // ...          
        })
  }
  
  onSubmit(form, email, password){
    console.log('form')
    console.log(form)
    console.log(form.value)
    console.log(form.value.email)
    console.log(form.value.password)
    console.log(email)
    console.log(password)
    // let emailAddress: string = email
    // console.log(emailAddress)
    this.angularFireAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
        .then((user) => {
          // this.authState = user
          // this.updateUserData()
          this.router.navigate(['/login-email'])

        })
        .catch((error)=>{
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          console.log(error)
          console.log(error.message)
          this.errorMessage = error.message
          // console.log(errors[0].code)
          // // ...          
        })
    
  }
  

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { formAnimation } from '../../animations/form-animation';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css', '../auth.css'],
  animations: [
    formAnimation
  ]
})
export class EmailComponent implements OnInit {

  public animateMe=true;
  public signUpForm: FormGroup = null;
  public errorMessage = null;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  ngOnInit() { 
    // this.signUpForm = null;
    // this.signUpForm = new FormGroup({
    //         // firstName: new FormControl(null, Validators.required),
    //         // lastName: new FormControl(null, Validators.required),
    //         email: new FormControl(null, 
    //             [
    //                 Validators.required,
    //                 Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),
    //             ]),
    //         password: new FormControl(null, Validators.required),
    //         // passwordCheck: new FormControl(null, Validators.required)
    //         // office: new FormControl(null)
    //     })
  }
  
  onSubmit(form, email, password){
    console.log('form')
    console.log(form)
    console.log(form.value)
    console.log(form.value.email)
    console.log(form.value.password)
    console.log(email)
    console.log(password)
    
    
    
    this.angularFireAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
      .then((user) => {
        // this.authState = user
        // this.updateUserData()
        console.log('user - email')
        console.log(user)
        this.authService.signIn(user)

        //this.router.navigate(['members']
        //this.router.navigate(['/members'])
        


      })
      .catch((error) => {
          console.log(error)
          console.log(error.message)
          this.errorMessage = error.message
      });
    
    
    
    // this.angularFireAuth.auth().signInWithEmailAndPassword(form.value.email, form.value.password)
    //   .then((user)=> {
    //     console.log(user)
    //   })
    
    //   .catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });
    
  }

}

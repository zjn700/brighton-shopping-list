import { Component, OnInit, HostBinding } from '@angular/core';

//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';

import { formAnimation } from '../../animations/form-animation';
import { zoomAnimation } from '../../animations/zoom-animation';


import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../auth.css'],
  animations: [
    formAnimation,
    zoomAnimation

  ],
  host: { '[@zoomAnimation]': ''}
})
export class LoginComponent implements OnInit {
  error: any;
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private authService: AuthService) { 
    
    console.log('angularFireAuth.authState')
    console.log(angularFireAuth.authState)
    console.log(angularFireAuth.auth)

    if (angularFireAuth.authState) {
      this.user = angularFireAuth.authState;
      
    } else {
       console.log('not logged in')
    }

    
  }

  ngOnInit() {
    this.animateMe();
  }
  
  public state: string = 'small';
  public total: number = 0;
  public items  = [1, 2, 3]

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
        this.items[0] += 1;
  }
  
  
  
  loginGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result)=>{
        console.log('result', result)
        console.log(result.user.displayName)
        this.authService.userDisplayName = result.user.displayName;
        this.authService.signIn(result.user)
        this.router.navigate(['/members'])
      });
  }
    
  loginFacebook() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result)=>{
        console.log('result', result)
        this.authService.userDisplayName = result.user.displayName;
        this.authService.signIn(result.user)

        this.router.navigate(['/members'])
      });
  }  

  loginEmail() {
    console.log('here in loginEmail')
    this.router.navigate(['/login-email'])
    
    // this.angularFireAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider())
    //   .then((result)=>{
    //     console.log('result', result);
    //     this.authService.signIn()

    //     this.router.navigate(['/members'])
    //     console.log("...............blah")
        
    //   });
  }  

}

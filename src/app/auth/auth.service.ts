import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthService  {
    
    public userDisplayName = "";
    public userSignedIn  = false;
    public loggedOut = new EventEmitter<boolean>();
    
    constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }


    signIn(user) {
        console.log('user')
        console.log(user)
        console.log(user.email)
        this.loggedOut.emit(false)
        console.log('signing in');
        if (user.displayName) {
            this.userDisplayName = user.displayName
        } else {
            this.userDisplayName = user.email.substring(0, user.email.lastIndexOf("@"));
        }
        
        this.router.navigate(['/members'])
        this.userSignedIn = true;
    }
    
    logout() {
        console.log('this.userDisplayName');
        console.log(this.userDisplayName)
        this.userSignedIn = false;
        this.angularFireAuth.auth.signOut().then(() => {
            //this.userDisplayName = "";
              // Sign-out successful.
             // this.router.navigate(['/index'])
              console.log('this')
              console.log(this)
              console.log('userDisplayName')
              console.log(this.userDisplayName)
              //this.router.navigate(['/index'])
              this.loggedOut.emit(true)

            }, function(error) {
              // An error happened.
            });
        //this.router.navigate(['/signin'])

    }
    
}
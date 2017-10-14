import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css', '../auth.css']
})
export class MembersComponent implements OnInit {
  
  public userDisplayName = ''

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    
    if (this.authService.userDisplayName) {
    
    this.userDisplayName = this.authService.userDisplayName;
    } else {
      //this.userDisplayName = this.authService
      console.log(this.authService)
    }
    
    // console.log('this.userDisplayName')
    // console.log(this.userDisplayName)

    // if (this.userDisplayName == "") {
    if (!this.authService.userSignedIn) {
        this.router.navigate(['/login'])

    }
    
    this.authService.loggedOut
      .subscribe((loggedOut)=> {
        
        if (loggedOut) {
          this.router.navigate(['/login'])
        }
        // this.userDisplayName = "GRRR";
        // this.router.navigate(['../login'])
        // console.log('this.userDisplayName////////////////////////')
        // console.log(this.userDisplayName)
        // return false;
      })

  }
  
  

}

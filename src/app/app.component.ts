import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shopping List Manager';
  userLoggedOut=true;
  
  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    this.authService.loggedOut
      .subscribe((loggedOut)=>{
        this.userLoggedOut = loggedOut
      })
  }
  
  logout() {
     this.authService.logout()
  }
}

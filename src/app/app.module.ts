import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { EmailComponent } from './auth/email/email.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MembersComponent } from './auth/members/members.component';

import { AuthService } from './auth/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCq7jZILiJh-jzcgZmduRlQSsB4svsi5XQ",
  authDomain: "shopping-list-zjn700.firebaseapp.com",
  databaseURL: "https://shopping-list-zjn700.firebaseio.com",
  projectId: "shopping-list-zjn700",
  storageBucket: "shopping-list-zjn700.appspot.com",
  messagingSenderId: "358391167019"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

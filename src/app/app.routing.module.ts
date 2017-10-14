import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { EmailComponent } from './auth/email/email.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MembersComponent } from './auth/members/members.component';
// import { BookComponent } from './book/book.component';
// import { FirebaseGlossaryComponent } from './firebase-glossary/firebase-glossary.component';
// import { Page3Component } from './book/page3/page3.component';


//import { AUTH_ROUTES } from './users/auth.routes';

const APP_ROUTES: Routes = [
        //{ path: '', redirectTo: '/', pathMatch: 'full' },
        //{ path: '', redirectTo: '/login', pathMatch: 'full'  },
        { path: 'index', component:  MembersComponent },
        { path: 'members',  component:  MembersComponent },

        { path: 'login', component:  LoginComponent },
        { path: 'login-email',  component:  EmailComponent },
        { path: 'signup',  component:  SignupComponent },
        // { path: 'shopping', component: ShoppingListComponent, children: [
        //         { path: 'branch', component: BranchComponent },
        //         { path: 'sortedbyrisk', component: SortedByRiskComponent }
        //   ] },
        { path: '**', redirectTo: "/index"  }
        //{ path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
        //{ path: '**', redirectTo: '/', pathMatch: 'full' }

    ]
export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES)
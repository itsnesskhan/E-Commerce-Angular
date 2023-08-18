import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   isLoggedIn = false;
   isLogout = false;

  // Create a Subject for login status
  private loginStatusSubject = new Subject<boolean>();

  // Observable to be exposed for other components to subscribe to
  loginStatus$ = this.loginStatusSubject.asObservable();

  login() {
    this.isLoggedIn = true;
    this.isLogout = false;
    this.loginStatusSubject.next(true); // Notify subscribers about login
  }

  logout() {
    this.isLogout = true;
    this.isLoggedIn = false;
    this.loginStatusSubject.next(false); // Notify subscribers about logout
  }
}

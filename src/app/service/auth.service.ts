import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   isLoggedIn = false;
   isLogout = false;

  private loginStatusSubject = new Subject<boolean>();

  loginStatus$ = this.loginStatusSubject.asObservable();

  login() {
    this.isLoggedIn = true;
    this.isLogout = false;
    this.loginStatusSubject.next(true); 
  }

  logout() {
    this.isLogout = true;
    this.isLoggedIn = false;
    this.loginStatusSubject.next(false); 
  }
}

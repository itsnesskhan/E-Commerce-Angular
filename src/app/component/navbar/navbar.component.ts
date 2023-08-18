import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  loggedIn: boolean = false;
  private loginStatusSubscription: Subscription;

  constructor(private authService: AuthService, private router:Router) {
    this.loginStatusSubscription = this.authService.loginStatus$.subscribe((status) => {
      this.loggedIn = status;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  ngOnDestroy() {
    this.loginStatusSubscription.unsubscribe();
  }
}

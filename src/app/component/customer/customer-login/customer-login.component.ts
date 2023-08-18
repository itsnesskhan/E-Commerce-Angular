import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {

  isSubmitted = false;
  hide = false;

  constructor(private fb: FormBuilder, private router: Router, private auth:AuthService) {}

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    console.log("Submit button clicked");
    this.auth.login()
    this.router.navigate(['/customer']);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent {

  hide = true;
  isSubmited = false;
  tc =''

  radioItems = [
    'Male', 'Female'
  ]

 user:User = new User(0,'','',null, '','','','Male');

  public formSubmit =  (form:NgForm)=>{
    // console.log(form)
    this.isSubmited = true
  }

  masterRadioChanged(event: any): void {
    const selectedValue = event.value;
      this.radioItems.forEach(item => (item = selectedValue));
  }
}

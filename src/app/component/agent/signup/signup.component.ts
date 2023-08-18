import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';
import { forbiddenWordsValidator } from 'src/app/shared/forbidden.username.validator';
import { passwordValidator } from 'src/app/shared/password.validator';

interface login{
  username:string,
  email:string,
  password:string,
  

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  forbiddenWords = ['admin', 'password', 'superuser'];

  constructor(private fb:FormBuilder,
              private _register:RegistrationService          
    ){
    
  }
  ngOnInit(): void {
    this.loginForm.get('support')?.valueChanges.subscribe((chackedValue)=>{
      const email = this.loginForm.get('email');
      if(chackedValue){
        email?.setValidators(Validators.required);
      }
      else{
        email?.clearAsyncValidators();
      }
      email?.updateValueAndValidity();
    })
  }

  loginForm = this.fb.group({
    username:['iamness27',[Validators.required, forbiddenWordsValidator(this.forbiddenWords)]],
    password:['',[Validators.required ,Validators.minLength(8)]],
    confirmPassword:['', Validators.required],
    email:[''],
    alternateEmail: this.fb.array([]),
    support:[false],
    address: this.fb.group({
      city:['Dharampuri'],
      state:['Mp'],
      postalCode:['']
    })
  },{validators: passwordValidator})   

  quantities() : FormArray {  
    return this.loginForm.get("alternateEmail") as FormArray  
  }  

    // loginForm = new FormGroup({
    //   username: new FormControl('itsnesskhan', Validators.minLength(5)),
    //   password: new FormControl('', [Validators.minLength(8), Validators.required]),
    //   confirmPassword: new FormControl('',  Validators.required),
    //   hobbies: new FormArray([]),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //     postalCode: new FormControl('')
    //   })
    // }, {validators: passwordValidator})     //another simple way of doing it is to use formbuilder


    onAddEmail(){
      console.log('working')
      const control = new FormControl('', Validators.required);
      (<FormArray>this.loginForm.get('alternateEmail')).push(control);
    }


    loadApiData(){
      // this.loginForm.setValue({ //want to set all coloums use setValue
      //   email:'itsnesskhan@gmail.com',
      //   password:'iness',
      //   address:{
      //     city: 'Dharampuri',
      //     state: 'Madhya Pradesh',
      //     postalCode: '454449'
      //   }
      // })

      this.loginForm.patchValue({ //want to set few coloums use setValue
        username:'mnk56250@gmail.com'
      })
    }

    onSubmit(){
      this._register.register(this.loginForm.value).subscribe(
        response=>console.log(response),
        error=> console.log(error)
      )
    }
}


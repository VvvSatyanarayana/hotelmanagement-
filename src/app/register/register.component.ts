import { Component, OnInit,Directive } from '@angular/core';
import{FormGroup,Validators,FormControl}from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  title = 'REGISTER PAGE';
  registerform:FormGroup;
  failMessage:string;
  myform: FormGroup;
  constructor() { 
    this.myform=new FormGroup({
      name:new FormControl("",[Validators.required]),
      
      email:new FormControl("",[Validators.required]),
      mobile:new FormControl("",[Validators.required,Validators.pattern('([789]{1}\\d{9})')]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)]),
  

    });
  }
  get name(){
    return this.myform.get('name');
  }
  get email(){
    return this.myform.get('email');
  }
  get mobile(){
    return this.myform.get('mobile');
  }
   get password(){
     return this.myform.get('password');
   }

  

}
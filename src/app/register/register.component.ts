import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormControl}from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'REGISTER PAGE';
  registrationform:FormGroup;
  fname:string;
  lname:string;
  email:string;
  mob:number;
  gen:string;
  add:string;
  npsw:string;
  cpsw:string;

  constructor() { 
    this.registrationform=new FormGroup({
      firstname:new FormControl("",[Validators.required]),
      lastname:new FormControl("",[Validators.required]),
      emailid:new FormControl("",[Validators.required]),
      mobilenumber:new FormControl("",[Validators.required,Validators.pattern('([789]{1}\\d{9})')]),
      gender:new FormControl("",[Validators.required]),
      address:new FormControl("",[Validators.required]),
      newpassword:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z0-9]')]),
      confirmpassword:new FormControl("",[Validators.required]),

    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
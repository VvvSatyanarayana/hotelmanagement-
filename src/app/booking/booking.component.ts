import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  myform:FormGroup;
  constructor() {

    this.myform=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.pattern("[a-zA-z]*"),Validators.maxLength(10)]),
      checkin:new FormControl("",[Validators.required]),
      checkout:new FormControl("",[Validators.required]),
      norooms:new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),
      noadults:new FormControl("",[Validators.required]),
      nochildren:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.pattern("[^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$]")]),
      number:new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),
      });
      
   }
  get name(){
    return this.myform.get('name');
  }
  get checkin(){
    return this.myform.get('checkin');
  }
  get checkout(){
    return this.myform.get('checkout');
  }
  get norooms(){
    return this.myform.get('norooms');
  }
  get noadults(){
    return this.myform.get('noadults');
  }
  get nochildren(){
    return this.myform.get('nochildren');
  }
  get email(){
    return this.myform.get('email');
  }
  get number(){
    return this.myform.get('number');
  }
  
}
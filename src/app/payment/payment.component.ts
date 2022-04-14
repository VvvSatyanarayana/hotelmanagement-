import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  myform: FormGroup;

  constructor() {
    this.myform=new FormGroup({
      cardnumber:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(12)]),
      expiredate:new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),
        cvv: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.maxLength(4)]),

      });
  }
  get cardnumber(){
    return this.myform.get('cardnumber');
  }
  get expiredate(){
    return this.myform.get('expiredate');
  }
   get cvv(){
     return this.myform.get('cvv');
   }
   login(){
    console.log(this.myform.value.cvv)
    alert("payment successful")
  }
}


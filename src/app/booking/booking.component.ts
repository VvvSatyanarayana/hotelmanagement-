import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform:FormGroup;
  id:number;
  name:string="";
  checkin:string="";
  checkout:string="";
  rooms:number;
  adults:number;
  children:number;
  email:string="";
  phoneno:number;
  emp:Customer;
  msg:string;
  flag:boolean=false;
  constructor(private customerservice:CustomerService){}

  storeD(data1){
    console.log(data1.value);
    this.id=data1.value.id;
    this.name=data1.value.name;
    this.checkin=data1.value.checkin;
    this.checkout=data1.value.checkout;
    this.rooms=data1.value.rooms;
    this.adults=data1.value.adults;
    this.children=data1.value.children;
    this.email=data1.value.email;
    this.phoneno=data1.value.phoneno;
    this.emp=new Customer(this.id,this.name,this.checkin, this.checkout,this.rooms,this.adults,this.children, this.email,this.phoneno);
    this.customerservice.storeData(this.emp)
    .subscribe(data=>{
      console.log(data)
      this.msg=data;
      this.flag=true;

    })
    data1.form.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers:any=[];
  constructor(private service:CustomerService) { }

  ngOnInit() {
       this.service.getData().subscribe(data=>{
         console.log(data);

         this.customers=data;
        },error=>{
           console.log(error.message)
        });
   }
 
 }
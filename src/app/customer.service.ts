import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL:string="http://localhost:9071/api/";

  constructor(private http:HttpClient) { }

  storeData(emp:any){
    console.log(emp);
    return this.http.post(this.baseURL+"savecustomer",emp,{responseType:'text'});
  }
  updateData(emp:any){
    console.log(emp);
    return this.http.put(this.baseURL+"updatecustomer",emp,{responseType:'text'});
  }
  getData(){
    return this.http.get(this.baseURL+"customers")
  }

}
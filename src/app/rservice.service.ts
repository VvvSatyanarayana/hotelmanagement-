import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RserviceService {

  baseURL:string="http://localhost:8800/";
  constructor(private http:HttpClient) { }
  
  
   storeData(ro:any){
     console.log(ro);
    return  this.http.post(this.baseURL+"saveroom",ro,{responseType:'text'});
   }
  
   updateData(ro:any){
     console.log(ro);
     return this.http.put(this.baseURL+"updateroom",ro,{responseType:'text'});
   }
  
   getData(){
     return this.http.get(this.baseURL+"getallroom");
   }
  }
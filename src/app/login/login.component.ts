import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashBoardComponent } from '../dash-board/dash-board.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginform:FormGroup;
  
  failMessage:string;
  constructor(private router: Router) { 
    this.loginform=new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email]),
      pwd:new FormControl("",[Validators.required,Validators.minLength(8)]),
      
    });
  }

  get exampleInputEmail1(){
    return this.loginform.get('exampleInputEmail1');
  }

  get exampleInputPassword1(){
   return this.loginform.get('exampleInputPassword1');
 }

 mylogin():void{
  /*const url = this.router.serializeUrl(
    this.router.createUrlTree(['/dash-board'])
  );

  //window.open(url, '_blank');*/
  this.router.navigate(['dashboard'])
 }
 


}

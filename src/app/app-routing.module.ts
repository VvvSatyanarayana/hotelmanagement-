import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';


import { PaymentComponent } from './payment/payment.component';
import { RoomsComponent } from './rooms/rooms.component';

import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

import { AppComponent } from './app.component';



const routes: Routes = [
  {path:"booking",component:BookingComponent},
  

  {path:"payment",component:PaymentComponent},
  {path:"rooms",component:RoomsComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'},

  {path:"login",component:LoginComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"register",component:RegisterComponent},
  {path:"dash-board",component:DashBoardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
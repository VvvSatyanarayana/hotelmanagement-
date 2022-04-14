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
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutUsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
{path:'dashboard',component:DashBoardComponent,children:[
  {path:'rooms',component:RoomsComponent},
{path:'booking',component:BookingComponent},
{path:'payment',component:PaymentComponent}

]},



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
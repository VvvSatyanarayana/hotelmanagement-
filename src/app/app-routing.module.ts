import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CustomerComponent } from './customer/customer.component';
import { HotelOperationsComponent } from './hotel-operations/hotel-operations.component';
import { PaymentComponent } from './payment/payment.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServiceComponent } from './service/service.component';

import { AppComponent } from './app.component';



const routes: Routes = [
  {path:"booking",component:BookingComponent},
  {path:"customer",component:CustomerComponent},
  {path:"hotel-operations",component:HotelOperationsComponent},
  {path:"payment",component:PaymentComponent},
  {path:"rooms",component:RoomsComponent},
  {path:"services",component:ServiceComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
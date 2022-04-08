import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { CustomerComponent } from './customer/customer.component';
import { HotelOperationsComponent } from './hotel-operations/hotel-operations.component';
import { BookingComponent } from './booking/booking.component';
import { ServiceComponent } from './service/service.component';
import { RoomsComponent } from './rooms/rooms.component';
import { Route, Routes } from '@angular/router';


const routes:Routes = [
  {path:"booking",component:BookingComponent},
  {path:"customer",component:CustomerComponent},
  {path:"hotel-operations",component:HotelOperationsComponent},
  {path:"payment",component:PaymentComponent},
  {path:"rooms",component:RoomsComponent},
  {path:"services",component:ServiceComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    CustomerComponent,
    HotelOperationsComponent,
    BookingComponent,
    ServiceComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

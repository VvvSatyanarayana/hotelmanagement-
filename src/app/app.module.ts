import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Validator } from '@angular/forms';




import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { Route, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { RoomlistComponent } from './roomlist/roomlist.component';


const routes:Routes = [
  {path:"booking",component:BookingComponent}, 
  {path:"payment",component:PaymentComponent},
  {path:"rooms",component:RoomsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"dash-board",component:DashBoardComponent}
 
];


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    BookingComponent,
    RoomsComponent,
    RegisterComponent,
    LoginComponent,
    AboutUsComponent,
    DashBoardComponent,
    HomeComponent,
    CustomerComponent,
    RoomlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

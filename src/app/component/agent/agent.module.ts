import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { VehicalBookingComponent } from './vehical-booking/vehical-booking.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AgentDashboardComponent,
    SignupComponent,
    SigninComponent,
    VehicalBookingComponent,
    HotelBookingComponent,
    FlightBookingComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[
    AgentDashboardComponent,
    SignupComponent,
    SigninComponent,
    VehicalBookingComponent,
    HotelBookingComponent,
    FlightBookingComponent
  ]
})
export class AgentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { FlightServicesComponent } from './flight-services/flight-services.component';
import { HotelServicesComponent } from './hotel-services/hotel-services.component';
import { VehicalServicesComponent } from './vehical-services/vehical-services.component';
import { FlightServicesDetailsComponent } from './flight-services-details/flight-services-details.component';
import { HotelServicesDetailsComponent } from './hotel-services-details/hotel-services-details.component';
import { VehicaServicesDetailsComponent } from './vehica-services-details/vehica-services-details.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerSignupComponent,
    CustomerDashboardComponent,
    FlightServicesComponent,
    HotelServicesComponent,
    VehicalServicesComponent,
    FlightServicesDetailsComponent,
    HotelServicesDetailsComponent,
    VehicaServicesDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[
    CustomerLoginComponent,
    CustomerSignupComponent,
    CustomerDashboardComponent,
    FlightServicesComponent,
    HotelServicesComponent,
    VehicalServicesComponent,
    FlightServicesDetailsComponent,
    HotelServicesDetailsComponent,
    VehicaServicesDetailsComponent
  ]
})
export class CustomerModule { }

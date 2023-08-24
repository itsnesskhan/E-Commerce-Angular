import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/agent/signup/signup.component';
import { AgentDashboardComponent } from './component/agent/agent-dashboard/agent-dashboard.component';
import { FlightBookingComponent } from './component/agent/flight-booking/flight-booking.component';
import { HotelBookingComponent } from './component/agent/hotel-booking/hotel-booking.component';
import { VehicalBookingComponent } from './component/agent/vehical-booking/vehical-booking.component';
import { SigninComponent } from './component/agent/signin/signin.component';
import { CustomerDashboardComponent } from './component/customer/customer-dashboard/customer-dashboard.component';
import { CustomerSignupComponent } from './component/customer/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './component/customer/customer-login/customer-login.component';
import { HotelServicesComponent } from './component/customer/hotel-services/hotel-services.component';
import { FlightServicesComponent } from './component/customer/flight-services/flight-services.component';
import { VehicalServicesComponent } from './component/customer/vehical-services/vehical-services.component';
import { VehicaServicesDetailsComponent } from './component/customer/vehica-services-details/vehica-services-details.component';
import { HotelServicesDetailsComponent } from './component/customer/hotel-services-details/hotel-services-details.component';
import { FlightServicesDetailsComponent } from './component/customer/flight-services-details/flight-services-details.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'agent', loadChildren: () => import('./component/agent/agent.module').then(m => m.AgentModule) },
  { path: 'customer', loadChildren: () => import('./component/customer/customer.module').then(m => m.CustomerModule) },
{ path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

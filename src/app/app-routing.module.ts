import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
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
    {path:'agent',
  children: [
    {path:'', component: AgentDashboardComponent, canActivate:[AuthGuard]},
    {path:'signup', component: SignupComponent},
    {path:'signin', component:SigninComponent},
    {path:'flight-booking', component:FlightBookingComponent, canActivate:[AuthGuard]},
    {path:'hotel-booking', component:HotelBookingComponent, canActivate:[AuthGuard]},
    {path:'vehical-booking', component:VehicalBookingComponent, canActivate:[AuthGuard]}
  ],
},
  {
    path:'customer',
    children:[
      {path:'',component:CustomerDashboardComponent, canActivate:[AuthGuard]},
      {path:'signup',component:CustomerSignupComponent},
      {path:'signin',component:CustomerLoginComponent},
      {path:'hotel-service',component:HotelServicesComponent, canActivate:[AuthGuard]},
      {path:'flight-service',component:FlightServicesComponent, canActivate:[AuthGuard]},
      {path:'vehical-service',component:VehicalServicesComponent, canActivate:[AuthGuard]},
      {path:'vehical-service-details/:id', component:VehicaServicesDetailsComponent, canActivate:[AuthGuard]},
      {path:'flight-service-details/:id', component:FlightServicesDetailsComponent, canActivate:[AuthGuard]},
      {path:'hotel-service-details/:id', component:HotelServicesDetailsComponent, canActivate:[AuthGuard]}
    ]
  },

{path: '', component: HomeComponent},
{path:'', redirectTo:'/',pathMatch:'full'},
{path:'**', redirectTo:'/products', pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

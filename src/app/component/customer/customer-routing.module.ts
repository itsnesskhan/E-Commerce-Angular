import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HotelServicesComponent } from './hotel-services/hotel-services.component';
import { FlightServicesComponent } from './flight-services/flight-services.component';
import { VehicalServicesComponent } from './vehical-services/vehical-services.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { VehicaServicesDetailsComponent } from './vehica-services-details/vehica-services-details.component';
import { FlightServicesDetailsComponent } from './flight-services-details/flight-services-details.component';
import { HotelServicesDetailsComponent } from './hotel-services-details/hotel-services-details.component';

const routes: Routes = [

  { path: '', component: CustomerDashboardComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: CustomerSignupComponent },
  { path: 'signin', component: CustomerLoginComponent },
  { path: 'hotel-service', component: HotelServicesComponent, canActivate: [AuthGuard] },
  { path: 'flight-service', component: FlightServicesComponent, canActivate: [AuthGuard] },
  { path: 'vehical-service', component: VehicalServicesComponent, canActivate: [AuthGuard] },
  { path: 'vehical-service-details/:id', component: VehicaServicesDetailsComponent, canActivate: [AuthGuard] },
  { path: 'flight-service-details/:id', component: FlightServicesDetailsComponent, canActivate: [AuthGuard] },
  { path: 'hotel-service-details/:id', component: HotelServicesDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

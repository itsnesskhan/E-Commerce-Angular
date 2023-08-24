import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { VehicalBookingComponent } from './vehical-booking/vehical-booking.component';
import { AuthGuard } from 'src/app/guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'agent', pathMatch: 'full' }, // Redirect to 'agent' by default
  { path: '', component: AgentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'flight-booking', component: FlightBookingComponent, canActivate: [AuthGuard] },
  { path: 'hotel-booking', component: HotelBookingComponent, canActivate: [AuthGuard] },
  { path: 'vehical-booking', component: VehicalBookingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }

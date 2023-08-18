import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './component/agent/signup/signup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AgentDashboardComponent } from './component/agent/agent-dashboard/agent-dashboard.component';
import { HotelBookingComponent } from './component/agent/hotel-booking/hotel-booking.component';
import { FlightBookingComponent } from './component/agent/flight-booking/flight-booking.component';
import { VehicalBookingComponent } from './component/agent/vehical-booking/vehical-booking.component';
import { SigninComponent } from './component/agent/signin/signin.component';
import { CustomerDashboardComponent } from './component/customer/customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './component/customer/customer-login/customer-login.component';
import { CustomerSignupComponent } from './component/customer/customer-signup/customer-signup.component';
import { HotelServicesComponent } from './component/customer/hotel-services/hotel-services.component';
import { FlightServicesComponent } from './component/customer/flight-services/flight-services.component';
import { VehicalServicesComponent } from './component/customer/vehical-services/vehical-services.component';
import { VehicaServicesDetailsComponent } from './component/customer/vehica-services-details/vehica-services-details.component';
import { FlightServicesDetailsComponent } from './component/customer/flight-services-details/flight-services-details.component';
import { HotelServicesDetailsComponent } from './component/customer/hotel-services-details/hotel-services-details.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './component/home/home.component';





const material = [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    AgentDashboardComponent,
    HotelBookingComponent,
    FlightBookingComponent,
    VehicalBookingComponent,
    CustomerDashboardComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    HotelServicesComponent,
    FlightServicesComponent,
    VehicalServicesComponent,
    VehicaServicesDetailsComponent,
    FlightServicesDetailsComponent,
    HotelServicesDetailsComponent,
    HomeComponent
  ],

  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...material,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

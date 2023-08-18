import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent {

  selectedOption:string = ''
  myServices = ['Hotel Booking', 'Flight Booking']
  allServices = ['Hotel Booking', 'Vehical Booking', 'Flight Booking','Car Rental']

  constructor(private _router:Router){}
  

  onSelectService(selected: string) {
    this.selectedOption = selected;
    if(this.selectedOption === 'Hotel Booking')
        this._router.navigate(['/agent', 'hotel-booking' ]);
    else if(this.selectedOption === 'Flight Booking')
        this._router.navigate(['/agent','flight-booking']) 
    else if(this.selectedOption === 'Vehical Booking')
        this._router.navigate(['/agent','vehical-booking'])    
    
  }
}

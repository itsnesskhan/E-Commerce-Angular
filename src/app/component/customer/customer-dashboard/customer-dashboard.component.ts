import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

  selectedAgent: string | null = null;
  agentList: string[] = ['Agent 1', 'Agent 2', 'Agent 3']; // Example agent list
  agentServices: string[] = ['Flight Booking', 'Hotel Booking', 'Vehical Booking']; // Example agent services

  onAgentSelect(agent: string): void {
    this.selectedAgent = agent;
    this.updateAgentServices();
  }
  constructor(private router:Router){}

  onSelectService(selectedService: string | null): void {
    // Handle the selected service as needed
    console.log('Selected service:', selectedService);
    if(selectedService === 'Flight Booking')
        this.router.navigate(['/customer','flight-service'])
    else if(selectedService === 'Hotel Booking')
        this.router.navigate(['/customer','hotel-service'])  
    else if(selectedService === 'Vehical Booking')
        this.router.navigate(['/customer','vehical-service'])  

  }

  private updateAgentServices(): void {
    // Update the agentServices array based on the selected agent
    switch (this.selectedAgent) {
      case 'Agent 1':
        this.agentServices = ['Flight Booking', 'Hotel Booking', 'Vehical Booking'];
        break;
      case 'Agent 2':
        this.agentServices = ['Flight Booking', 'Hotel Booking', 'Car Rental','Dummy Booking'];
        break;
      case 'Agent 3':
        this.agentServices = ['Vehical Booking'];
        break;
      default:
        this.agentServices = [];
        break;
    }
  }
}

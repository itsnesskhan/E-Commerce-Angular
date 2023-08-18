import { Component } from '@angular/core';
import { FlightBooking } from 'src/app/model/FlightBooking';

@Component({
  selector: 'app-flight-services',
  templateUrl: './flight-services.component.html',
  styleUrls: ['./flight-services.component.css']
})
export class FlightServicesComponent {

  flightBookings: FlightBooking[] = [
    {
      id: 1,
      flightName: 'Emirates',
      from: 'New York',
      to: 'London',
      departureDate: '2023-08-15',
      passengers: 2,
      class: 'economy'
    },
    {
      id: 2,
      flightName: 'Delta Airlines',
      from: 'Los Angeles',
      to: 'Tokyo',
      departureDate: '2023-08-18',
      passengers: 3,
      class: 'business'
    },
    {
      id: 3,
      flightName: 'Singapore Airlines',
      from: 'Singapore',
      to: 'Sydney',
      departureDate: '2023-08-21',
      passengers: 1,
      class: 'first'
    },
    {
      id: 4,
      flightName: 'British Airways',
      from: 'London',
      to: 'New York',
      departureDate: '2023-09-10',
      passengers: 2,
      class: 'economy'
    },
    {
      id: 5,
      flightName: 'Qatar Airways',
      from: 'Doha',
      to: 'Paris',
      departureDate: '2023-09-05',
      passengers: 1,
      class: 'business'
    },
    {
      id: 6,
      flightName: 'Air France',
      from: 'Paris',
      to: 'Los Angeles',
      departureDate: '2023-09-18',
      passengers: 3,
      class: 'first'
    }
  ];
}

import { Component } from '@angular/core';
import { VehicleBooking } from 'src/app/model/VehicalBooking';

@Component({
  selector: 'app-vehical-services',
  templateUrl: './vehical-services.component.html',
  styleUrls: ['./vehical-services.component.css']
})
export class VehicalServicesComponent {

  vehicleBookings: VehicleBooking[] = [
    {
      id:1,
      pickupLocation: 'Airport',
      pickupDate: '2023-08-15',
      pickupTime: '10:00 AM',
      durationInHours: 4,
      vehicleType: 'car'
    },
    
    {
      id: 2,
      pickupLocation: 'Hotel',
      pickupDate: '2023-08-17',
      pickupTime: '02:30 PM',
      durationInHours: 2,
      vehicleType: 'suv'
    },
    {
      id: 3,
      pickupLocation: 'Downtown',
      pickupDate: '2023-08-20',
      pickupTime: '09:00 AM',
      durationInHours: 8,
      vehicleType: 'van'
    },
    {
      id: 4,
      pickupLocation: 'Beach Resort',
      pickupDate: '2023-08-25',
      pickupTime: '11:30 AM',
      durationInHours: 6,
      vehicleType: 'car'
    },
    {
      id: 5,
      pickupLocation: 'City Center',
      pickupDate: '2023-08-28',
      pickupTime: '03:00 PM',
      durationInHours: 3,
      vehicleType: 'suv'
    },
    {
      id: 6,
      pickupLocation: 'Conference Center',
      pickupDate: '2023-09-02',
      pickupTime: '08:00 AM',
      durationInHours: 5,
      vehicleType: 'van'
    }
    
  ];

  
}

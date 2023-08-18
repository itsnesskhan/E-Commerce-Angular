import { Component, Input } from '@angular/core';
import { HotelBooking } from 'src/app/model/HotelBooking';

@Component({
  selector: 'app-hotel-services',
  templateUrl: './hotel-services.component.html',
  styleUrls: ['./hotel-services.component.css']
})
export class HotelServicesComponent {

 
   hotelBookings: HotelBooking[] = [
    {
      id: 1,
      hotelName: 'Hotel A',
      checkInDate: '2023-08-15',
      checkOutDate: '2023-08-20',
      numberOfGuests: 2,
      roomType: 'single',
      specialRequests: 'No smoking room'
    },
    {
      id: 2,
      hotelName: 'Hotel B',
      checkInDate: '2023-08-18',
      checkOutDate: '2023-08-22',
      numberOfGuests: 3,
      roomType: 'double',
      specialRequests: 'Extra bed needed'
    },
    {
      id: 3,
      hotelName: 'Hotel C',
      checkInDate: '2023-08-21',
      checkOutDate: '2023-08-25',
      numberOfGuests: 1,
      roomType: 'single',
      specialRequests: 'Quiet room preferred'
    },
    {
      id: 4,
      hotelName: 'Hotel D',
      checkInDate: '2023-09-10',
      checkOutDate: '2023-09-15',
      numberOfGuests: 2,
      roomType: 'double',
      specialRequests: 'Early check-in requested'
    },
    {
      id: 5,
      hotelName: 'Hotel E',
      checkInDate: '2023-09-05',
      checkOutDate: '2023-09-10',
      numberOfGuests: 1,
      roomType: 'single',
      specialRequests: 'Allergen-free room needed'
    },
    {
      id: 6,
      hotelName: 'Hotel F',
      checkInDate: '2023-09-18',
      checkOutDate: '2023-09-20',
      numberOfGuests: 3,
      roomType: 'suite',
      specialRequests: 'Extra bed and baby crib required'
    }
  ];
  
}

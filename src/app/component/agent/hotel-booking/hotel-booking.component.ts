import { Component } from '@angular/core';
import { HotelBooking } from 'src/app/model/HotelBooking';



@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent {


  booking: HotelBooking = {
    hotelName: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    roomType: 'single',
    specialRequests: ''
  };

  submitBooking() {
    console.log('Submitted booking:', this.booking);
  }
}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { HotelBooking } from 'src/app/model/HotelBooking';

@Component({
  selector: 'app-hotel-services-details',
  templateUrl: './hotel-services-details.component.html',
  styleUrls: ['./hotel-services-details.component.css']
})
export class HotelServicesDetailsComponent {

  bookingId: number | null = null;
  booking: HotelBooking | undefined;

  hotelBookings: HotelBooking[] = [
    {
      id:1,
      checkInDate: '2023-08-15',
      checkOutDate: '2023-08-20',
      numberOfGuests: 2,
      roomType: 'single',
      specialRequests: 'No smoking room'
    },
    {
      id:2,
      checkInDate: '2023-08-18',
      checkOutDate: '2023-08-22',
      numberOfGuests: 3,
      roomType: 'double',
      specialRequests: 'Extra bed needed'
    },
    {
      id:3,
      checkInDate: '2023-08-21',
      checkOutDate: '2023-08-25',
      numberOfGuests: 1,
      roomType: 'single',
      specialRequests: 'Quiet room preferred'
    },
    {
      id: 4,
      checkInDate: '2023-09-10',
      checkOutDate: '2023-09-15',
      numberOfGuests: 2,
      roomType: 'double',
      specialRequests: 'Early check-in requested'
    },
    {
      id: 5,
      checkInDate: '2023-09-05',
      checkOutDate: '2023-09-10',
      numberOfGuests: 1,
      roomType: 'single',
      specialRequests: 'Allergen-free room needed'
    },
    {
      id: 6,
      checkInDate: '2023-09-18',
      checkOutDate: '2023-09-20',
      numberOfGuests: 3,
      roomType: 'suite',
      specialRequests: 'Extra bed and baby crib required'
    }
    
  ]

  constructor(private route: ActivatedRoute,
            private _snack:MatSnackBar
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookingId = +params['id']; // Convert string to number
      this.loadBookingDetails();
    });
  }

  loadBookingDetails(): void {
    // Replace with your logic to fetch booking details based on bookingId
    // Example: You can find the booking in hotelBookings array using bookingId
    this.booking = this.hotelBookings.find(booking => booking.id === this.bookingId);
  }

  bookNow(){
    this._snack.open("Hotel Booked Successfully!", 'Dismiss', {
      duration: 3000
    });
  }
}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { VehicleBooking } from 'src/app/model/VehicalBooking';

@Component({
  selector: 'app-vehica-services-details',
  templateUrl: './vehica-services-details.component.html',
  styleUrls: ['./vehica-services-details.component.css']
})
export class VehicaServicesDetailsComponent {

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

  bookingId: number | null = null;
  booking: VehicleBooking | undefined;

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
    this.booking = this.vehicleBookings.find(booking => booking.id === this.bookingId);
  }

  bookNow(){
    this._snack.open("Vehical Booked Successfully!", 'Dismiss', {
      duration: 3000
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleBooking } from 'src/app/model/VehicalBooking';

@Component({
  selector: 'app-vehical-booking',
  templateUrl: './vehical-booking.component.html',
  styleUrls: ['./vehical-booking.component.css']
})
export class VehicalBookingComponent {

  vehicleBookingForm: FormGroup = this.fb.group({});
  vehicleTypes: string[] = ['car', 'suv', 'van'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.vehicleBookingForm = this.fb.group({
      pickupLocation: ['', Validators.required],
      pickupDate: ['', Validators.required],
      pickupTime: ['12:00', Validators.required],
      durationInHours: ['', [Validators.required, Validators.min(1)]],
      vehicleType: ['car', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.vehicleBookingForm.valid) {
      const formData: VehicleBooking = this.vehicleBookingForm.value;
      console.log(formData); // You can perform actions with the form data here
    }
  }
}

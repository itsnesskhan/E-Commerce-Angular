import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightBooking } from 'src/app/model/FlightBooking';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent {

  flightBookingForm: FormGroup = this.fb.group({});
  classOptions: string[] = ['economy', 'business', 'first'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.flightBookingForm = this.fb.group({
      flightName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required],
      passengers: ['', [Validators.required, Validators.min(1)]],
      class: ['economy', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.flightBookingForm.valid) {
      const formData: FlightBooking = this.flightBookingForm.value;
      console.log(formData); // You can perform actions with the form data here
    }
  }
}

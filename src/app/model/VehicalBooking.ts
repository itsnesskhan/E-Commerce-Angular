export interface VehicleBooking {
  id: number; // Add ID property
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  durationInHours: number;
  vehicleType: 'car' | 'suv' | 'van';
}
  
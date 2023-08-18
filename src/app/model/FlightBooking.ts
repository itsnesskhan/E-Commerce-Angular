export interface FlightBooking {
    id?:number,
    flightName:string,
    from: string;
    to: string;
    departureDate: string; // You can use a Date type if needed
    passengers: number;
    class: 'economy' | 'business' | 'first';
  }
  
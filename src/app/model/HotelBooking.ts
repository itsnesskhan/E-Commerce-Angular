export interface HotelBooking {
    id?:number
    hotelName?:string,
    checkInDate: string; // You can use a Date type if needed
    checkOutDate: string; // You can use a Date type if needed
    numberOfGuests: number;
    roomType: 'single' | 'double' | 'suite';
    specialRequests: string;
  }
  
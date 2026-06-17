export type BookingType = "accommodation" | "restaurant" | "event";

export type PaymentStatus = "pending" | "paid" | "failed" | "cancelled";

export type BookingStatus = "new" | "confirmed" | "completed" | "cancelled";

export type Booking = {
  id: string;
  createdAt: string;
  customerName: string;
  phone: string;
  whatsapp: string;
  email?: string;
  bookingType: BookingType;
  date: string;
  time?: string;
  checkIn?: string;
  checkOut?: string;
  guests: number;
  packageName: string;
  amount: number;
  currency: "USD";
  paymentMethod: "Ecocash";
  ecocashNumber: string;
  ecocashReference: string;
  paymentStatus: PaymentStatus;
  bookingStatus: BookingStatus;
  notes?: string;
};

export type BookingInput = Omit<
  Booking,
  "id" | "createdAt" | "currency" | "paymentMethod" | "paymentStatus" | "bookingStatus"
>;

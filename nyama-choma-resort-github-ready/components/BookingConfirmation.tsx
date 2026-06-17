import { Booking } from "@/lib/types";

export function BookingConfirmation({ booking }: { booking: Booking }) {
  return (
    <div className="pad">
      <span className={`status ${booking.paymentStatus}`}>{booking.paymentStatus}</span>
      <h2>Booking received</h2>
      <p className="section-copy">
        Your booking ID is <strong>{booking.id}</strong>. Payment is pending staff confirmation. Keep
        your Ecocash reference handy.
      </p>
      <div className="payment-box">
        <p>
          <strong>{booking.customerName}</strong>
        </p>
        <p>
          {booking.bookingType} - {booking.packageName}
        </p>
        <p>
          {booking.guests} guest(s), USD {booking.amount}
        </p>
        <p>Ecocash reference: {booking.ecocashReference}</p>
      </div>
    </div>
  );
}

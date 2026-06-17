import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/booking-schema";
import { createBooking, listBookings } from "@/lib/bookings-store";
import { initiateEcocashPayment } from "@/lib/ecocash";

export async function GET() {
  const bookings = await listBookings();
  return NextResponse.json({ bookings });
}

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = bookingSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Booking details need attention.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const booking = await createBooking(parsed.data);
  const payment = await initiateEcocashPayment(booking);

  return NextResponse.json({ booking, payment }, { status: 201 });
}

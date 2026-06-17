import { NextResponse } from "next/server";
import { listBookings } from "@/lib/bookings-store";
import { bookingsToCsv } from "@/lib/csv";

export async function GET() {
  const bookings = await listBookings();
  const csv = bookingsToCsv(bookings);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="nyama-choma-bookings.csv"`
    }
  });
}

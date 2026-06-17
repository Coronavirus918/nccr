import { promises as fs } from "fs";
import path from "path";
import { appendBookingToGoogleSheet } from "./google-sheets";
import { Booking, BookingInput, PaymentStatus } from "./types";

const dataFile = path.join(process.cwd(), "data", "bookings.json");

async function ensureDataFile() {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, "[]", "utf8");
  }
}

export async function listBookings(): Promise<Booking[]> {
  await ensureDataFile();
  const raw = await fs.readFile(dataFile, "utf8");
  return JSON.parse(raw) as Booking[];
}

async function saveBookings(bookings: Booking[]) {
  await ensureDataFile();
  await fs.writeFile(dataFile, JSON.stringify(bookings, null, 2), "utf8");
}

export async function createBooking(input: BookingInput): Promise<Booking> {
  const booking: Booking = {
    ...input,
    id: `NCR-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    currency: "USD",
    paymentMethod: "Ecocash",
    paymentStatus: "pending",
    bookingStatus: "new",
    email: input.email || undefined
  };

  const bookings = await listBookings();
  bookings.unshift(booking);
  await saveBookings(bookings);
  await appendBookingToGoogleSheet(booking);
  return booking;
}

export async function updatePaymentStatus(id: string, paymentStatus: PaymentStatus) {
  const bookings = await listBookings();
  const index = bookings.findIndex((booking) => booking.id === id);

  if (index === -1) {
    return null;
  }

  bookings[index] = {
    ...bookings[index],
    paymentStatus,
    bookingStatus: paymentStatus === "paid" ? "confirmed" : bookings[index].bookingStatus
  };

  await saveBookings(bookings);
  return bookings[index];
}

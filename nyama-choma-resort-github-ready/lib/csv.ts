import { Booking } from "./types";

const headers: Array<keyof Booking> = [
  "id",
  "createdAt",
  "customerName",
  "phone",
  "whatsapp",
  "email",
  "bookingType",
  "date",
  "time",
  "checkIn",
  "checkOut",
  "guests",
  "packageName",
  "amount",
  "currency",
  "paymentMethod",
  "ecocashNumber",
  "ecocashReference",
  "paymentStatus",
  "bookingStatus",
  "notes"
];

function csvValue(value: unknown) {
  const text = value === undefined || value === null ? "" : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

export function bookingsToCsv(bookings: Booking[]) {
  const rows = [
    headers.join(","),
    ...bookings.map((booking) => headers.map((header) => csvValue(booking[header])).join(","))
  ];

  return rows.join("\n");
}

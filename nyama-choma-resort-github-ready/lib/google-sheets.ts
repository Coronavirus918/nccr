import { google } from "googleapis";
import { Booking } from "./types";

function configured() {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

export async function appendBookingToGoogleSheet(booking: Booking) {
  if (!configured()) {
    return { skipped: true, reason: "Google Sheets credentials are not configured." };
  }

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: process.env.GOOGLE_SHEET_RANGE || "Bookings!A:U",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          booking.id,
          booking.createdAt,
          booking.customerName,
          booking.phone,
          booking.whatsapp,
          booking.email || "",
          booking.bookingType,
          booking.date,
          booking.time || "",
          booking.checkIn || "",
          booking.checkOut || "",
          booking.guests,
          booking.packageName,
          booking.amount,
          booking.currency,
          booking.paymentMethod,
          booking.ecocashNumber,
          booking.ecocashReference,
          booking.paymentStatus,
          booking.bookingStatus,
          booking.notes || ""
        ]
      ]
    }
  });

  return { skipped: false };
}

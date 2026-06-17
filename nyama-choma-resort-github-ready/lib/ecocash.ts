import { Booking } from "./types";

export async function initiateEcocashPayment(booking: Booking) {
  return {
    mode: process.env.PAYNOW_INTEGRATION_ID ? "gateway-ready" : "manual",
    message:
      "Ecocash gateway credentials are not active. Customer should pay manually and staff should confirm the transaction.",
    merchantNumber: process.env.ECOCASH_MERCHANT_NUMBER || "+263 772 951 308",
    bookingId: booking.id
  };
}

export async function verifyEcocashWebhookSignature(_payload: unknown, _signature: string | null) {
  // Add Paynow/Ecocash signature verification here when merchant credentials are available.
  return Boolean(process.env.PAYNOW_INTEGRATION_ID && process.env.PAYNOW_INTEGRATION_KEY);
}

import { NextResponse } from "next/server";
import { updatePaymentStatus } from "@/lib/bookings-store";
import { verifyEcocashWebhookSignature } from "@/lib/ecocash";

export async function POST(request: Request) {
  const payload = await request.json();
  const signature = request.headers.get("x-paynow-signature");
  const verified = await verifyEcocashWebhookSignature(payload, signature);

  if (!verified) {
    return NextResponse.json(
      {
        accepted: false,
        message:
          "Webhook placeholder reached. Configure Paynow/Ecocash credentials and signature verification before enabling automatic confirmations."
      },
      { status: 202 }
    );
  }

  if (payload.bookingId && payload.status === "paid") {
    await updatePaymentStatus(payload.bookingId, "paid");
  }

  return NextResponse.json({ accepted: true });
}

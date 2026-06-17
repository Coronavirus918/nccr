import { NextResponse } from "next/server";
import { updatePaymentStatus } from "@/lib/bookings-store";
import { PaymentStatus } from "@/lib/types";

const allowedStatuses: PaymentStatus[] = ["pending", "paid", "failed", "cancelled"];

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const paymentStatus = body.paymentStatus as PaymentStatus;

  if (!allowedStatuses.includes(paymentStatus)) {
    return NextResponse.json({ error: "Invalid payment status." }, { status: 400 });
  }

  const booking = await updatePaymentStatus(params.id, paymentStatus);

  if (!booking) {
    return NextResponse.json({ error: "Booking not found." }, { status: 404 });
  }

  return NextResponse.json({ booking });
}

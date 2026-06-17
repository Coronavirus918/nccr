"use client";

import { X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { PaymentInstructions } from "./PaymentInstructions";
import { BookingConfirmation } from "./BookingConfirmation";
import { Booking, BookingType } from "@/lib/types";

type BookingDefaults = {
  bookingType: BookingType;
  packageName: string;
  amount: number;
};

export function BookingForm({
  open,
  onClose,
  defaults
}: {
  open: boolean;
  onClose: () => void;
  defaults: BookingDefaults;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [booking, setBooking] = useState<Booking | null>(null);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  if (!open) {
    return null;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    setSubmitting(false);

    if (!response.ok) {
      setError(result.error || "Please check the booking details.");
      return;
    }

    setBooking(result.booking);
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-header">
          <strong>Book with Ecocash</strong>
          <button className="btn btn-outline" onClick={onClose} aria-label="Close booking form">
            <X size={18} />
          </button>
        </div>
        {booking ? (
          <BookingConfirmation booking={booking} />
        ) : (
          <form className="pad" onSubmit={submit}>
            <div className="form-grid">
              <input type="hidden" name="bookingType" value={defaults.bookingType} />
              <div className="field">
                <label htmlFor="customerName">Full name</label>
                <input id="customerName" name="customerName" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" required placeholder="+263..." />
              </div>
              <div className="field">
                <label htmlFor="whatsapp">WhatsApp number</label>
                <input id="whatsapp" name="whatsapp" required placeholder="+263..." />
              </div>
              <div className="field">
                <label htmlFor="email">Email optional</label>
                <input id="email" name="email" type="email" />
              </div>
              <div className="field">
                <label htmlFor="date">Booking date</label>
                <input id="date" name="date" type="date" min={today} required />
              </div>
              <div className="field">
                <label htmlFor="time">Time</label>
                <input id="time" name="time" type="time" />
              </div>
              <div className="field">
                <label htmlFor="checkIn">Check-in</label>
                <input id="checkIn" name="checkIn" type="date" min={today} />
              </div>
              <div className="field">
                <label htmlFor="checkOut">Check-out</label>
                <input id="checkOut" name="checkOut" type="date" min={today} />
              </div>
              <div className="field">
                <label htmlFor="guests">Guests</label>
                <input id="guests" name="guests" type="number" min="1" defaultValue="2" required />
              </div>
              <div className="field">
                <label htmlFor="amount">Amount due USD</label>
                <input id="amount" name="amount" type="number" min="0" defaultValue={defaults.amount} required />
              </div>
              <div className="field">
                <label htmlFor="packageName">Room, table, or package</label>
                <input id="packageName" name="packageName" defaultValue={defaults.packageName} required />
              </div>
              <div className="field">
                <label htmlFor="ecocashNumber">Ecocash sending number</label>
                <input id="ecocashNumber" name="ecocashNumber" required placeholder="+263..." />
              </div>
              <div className="field full">
                <label htmlFor="ecocashReference">Ecocash transaction/reference</label>
                <input id="ecocashReference" name="ecocashReference" required />
              </div>
              <div className="field full">
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" placeholder="Dietary needs, arrival time, event details..." />
              </div>
              <div className="field full">
                <PaymentInstructions />
              </div>
            </div>
            {error ? <p style={{ color: "#9d2718" }}>{error}</p> : null}
            <p className="muted">Submitting creates a spreadsheet record with payment status pending.</p>
            <button className="btn btn-primary" disabled={submitting} type="submit">
              {submitting ? "Saving booking..." : "Submit booking"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

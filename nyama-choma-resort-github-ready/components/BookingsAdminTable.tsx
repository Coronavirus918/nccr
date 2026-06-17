"use client";

import { Download, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Booking, PaymentStatus } from "@/lib/types";

const statuses: PaymentStatus[] = ["pending", "paid", "failed", "cancelled"];

export function BookingsAdminTable({ initialBookings }: { initialBookings: Booking[] }) {
  const [bookings, setBookings] = useState(initialBookings);
  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);
    const response = await fetch("/api/bookings");
    const data = await response.json();
    setBookings(data.bookings);
    setLoading(false);
  }

  async function updateStatus(id: string, paymentStatus: PaymentStatus) {
    const response = await fetch(`/api/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentStatus })
    });
    const data = await response.json();
    if (response.ok) {
      setBookings((current) => current.map((booking) => (booking.id === id ? data.booking : booking)));
    }
  }

  return (
    <div className="card">
      <div className="pad" style={{ display: "flex", gap: 12, justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
          <strong>{bookings.length} booking record(s)</strong>
          <p className="muted">Paid bookings are automatically marked confirmed.</p>
        </div>
        <div className="hero-actions" style={{ marginTop: 0 }}>
          <button className="btn btn-outline" onClick={refresh} disabled={loading}>
            <RefreshCw size={18} /> Refresh
          </button>
          <a className="btn btn-primary" href="/api/bookings/export">
            <Download size={18} /> Export CSV
          </a>
        </div>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Booking</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Date</th>
              <th>Guests</th>
              <th>Amount</th>
              <th>Ecocash</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={10}>No bookings yet. New submissions will appear here and in CSV export.</td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    <strong>{booking.id}</strong>
                    <br />
                    <span className="muted">{new Date(booking.createdAt).toLocaleString()}</span>
                  </td>
                  <td>
                    {booking.customerName}
                    <br />
                    <span className="muted">{booking.phone}</span>
                  </td>
                  <td>
                    {booking.bookingType}
                    <br />
                    <span className="muted">{booking.packageName}</span>
                  </td>
                  <td>
                    {booking.date}
                    <br />
                    <span className="muted">{booking.time || booking.checkIn || ""}</span>
                  </td>
                  <td>{booking.guests}</td>
                  <td>
                    {booking.currency} {booking.amount}
                  </td>
                  <td>
                    {booking.ecocashNumber}
                    <br />
                    <span className="muted">{booking.ecocashReference}</span>
                  </td>
                  <td>
                    <span className={`status ${booking.paymentStatus}`}>{booking.paymentStatus}</span>
                  </td>
                  <td>
                    <select
                      value={booking.paymentStatus}
                      onChange={(event) => updateStatus(booking.id, event.target.value as PaymentStatus)}
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{booking.notes || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

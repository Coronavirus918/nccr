import { BookingsAdminTable } from "@/components/BookingsAdminTable";
import { listBookings } from "@/lib/bookings-store";

export const dynamic = "force-dynamic";

export default async function AdminBookingsPage() {
  const bookings = await listBookings();

  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Staff dashboard</span>
          <h1 className="section-title">Bookings and Ecocash payment tracking.</h1>
          <p className="section-copy">
            Review bookings, confirm Ecocash payments after checking the transaction reference, and
            export the records as a spreadsheet CSV.
          </p>
          <BookingsAdminTable initialBookings={bookings} />
        </div>
      </section>
    </main>
  );
}

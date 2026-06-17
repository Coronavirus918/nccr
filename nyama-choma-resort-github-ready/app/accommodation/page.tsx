import { RoomsGrid } from "@/components/RoomsGrid";

export default function AccommodationPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Accommodation</span>
          <h1 className="section-title">Stay close to nature with room bookings tracked by Ecocash status.</h1>
          <p className="section-copy">
            Select a room, submit your details, pay via Ecocash, and staff will confirm the payment in
            the bookings dashboard.
          </p>
          <RoomsGrid />
        </div>
      </section>
    </main>
  );
}

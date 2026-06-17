import { resortPhone } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <strong>Nyama Choma Resort Zimbabwe</strong>
        <p className="muted">Rainham, Zvimba District, Harare, Zimbabwe</p>
        <p>Bookings and Ecocash confirmations: {resortPhone}</p>
      </div>
    </footer>
  );
}

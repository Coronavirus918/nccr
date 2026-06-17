import { BookingButton } from "@/components/BookingButton";
import { RoomsGrid } from "@/components/RoomsGrid";
import { activities, eventPackages, menuCategories, resortPhone } from "@/lib/content";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">Rainham, Zvimba District, Harare</span>
          <h1>Luxury, Nature, and Nyama Choma in One Destination</h1>
          <p>
            A warm African resort experience with traditional nyama choma grilling, family activities,
            accommodation, events, and easy Ecocash-supported bookings.
          </p>
          <div className="hero-actions">
            <BookingButton label="Book a Room" bookingType="accommodation" packageName="Room booking" amount={50} />
            <BookingButton
              label="Reserve a Table"
              bookingType="restaurant"
              packageName="Restaurant table"
              amount={20}
              variant="light"
            />
            <a className="btn btn-light" href="#activities">
              View Activities <ArrowRight size={18} />
            </a>
            <a className="btn btn-outline" href={`tel:${resortPhone.replaceAll(" ", "")}`}>
              <Phone size={18} /> Call
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Authentic African hospitality</span>
            <h2 className="section-title">Traditional grilling, restful rooms, and family days outdoors.</h2>
            <p className="section-copy">
              Nyama Choma Resort Zimbabwe combines East African cuisine, modern safari-lodge styling,
              warm wood tones, subtle zebra-inspired texture, and a relaxed nature setting with roaming
              animals and outdoor entertainment.
            </p>
          </div>
          <div className="card image-card">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
              alt="Grilled meat served outdoors"
            />
          </div>
        </div>
      </section>

      <section className="section dark-band">
        <div className="container">
          <span className="eyebrow">Restaurant</span>
          <h2 className="section-title">East African cuisine and charcoal-fired nyama choma.</h2>
          <p className="section-copy">
            Bring the family for grilled meats, local dishes, drinks, and generous sharing platters in
            a relaxed outdoor dining setting.
          </p>
          <div className="feature-grid" style={{ marginTop: 28 }}>
            {menuCategories.slice(0, 3).map((category) => (
              <article className="card pad" key={category.title}>
                <h3>{category.title}</h3>
                <p className="muted">{category.items.join(" · ")}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <BookingButton
              label="Reserve a Table"
              bookingType="restaurant"
              packageName="Restaurant table"
              amount={20}
              variant="light"
            />
          </div>
        </div>
      </section>

      <section className="section" id="accommodation">
        <div className="container">
          <span className="eyebrow">Accommodation</span>
          <h2 className="section-title">Rooms from $40 to $80 per night.</h2>
          <p className="section-copy">
            Choose from luxury chalets, standard rooms, family rooms, and lodge-style rooms. Each room
            can be booked with an Ecocash reference and tracked by staff.
          </p>
          <RoomsGrid />
        </div>
      </section>

      <section className="section" id="activities">
        <div className="container">
          <span className="eyebrow">Activities</span>
          <h2 className="section-title">Built for family weekends, celebrations, and outdoor fun.</h2>
          <div className="activity-grid">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <article className="card pad" key={activity.title}>
                  <span className="icon-circle">
                    <Icon size={22} />
                  </span>
                  <h3>{activity.title}</h3>
                  <p className="muted">{activity.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section dark-band" id="events">
        <div className="container">
          <span className="eyebrow">Events</span>
          <h2 className="section-title">Weddings, birthdays, braais, conferences, and live music.</h2>
          <div className="events-grid">
            {eventPackages.map((event) => {
              const Icon = event.icon;
              return (
                <article className="card pad" key={event.title}>
                  <span className="icon-circle">
                    <Icon size={22} />
                  </span>
                  <h3>{event.title}</h3>
                  <p className="muted">{event.text}</p>
                </article>
              );
            })}
          </div>
          <div style={{ marginTop: 28 }}>
            <BookingButton label="Enquire for Event" bookingType="event" packageName="Event package" amount={100} />
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title">Food, accommodation, nature, events, and activities.</h2>
          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=80" alt="Grilled meat" />
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80" alt="Nature resort view" />
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80" alt="Resort stay" />
          </div>
        </div>
      </section>

      <section className="section dark-band">
        <div className="container">
          <span className="eyebrow">Guest notes</span>
          <h2 className="section-title">Warm service for families, groups, and weekend travellers.</h2>
          <div className="feature-grid">
            <article className="card pad">
              <h3>Family friendly</h3>
              <p className="muted">Outdoor spaces, activities, and relaxed dining make it easy to bring everyone along.</p>
            </article>
            <article className="card pad">
              <h3>Easy Ecocash tracking</h3>
              <p className="muted">Every booking keeps a payment reference so staff can quickly see what is pending or paid.</p>
            </article>
            <article className="card pad">
              <h3>Tinokugamuchirai</h3>
              <p className="muted">English and Shona-friendly contact copy helps local guests feel at home.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">FAQs</span>
          <h2 className="section-title">Booking questions.</h2>
          <div className="feature-grid">
            <article className="card pad">
              <h3>Can I pay with Ecocash?</h3>
              <p className="muted">Yes. Pay to {resortPhone}, enter your reference, and staff will confirm it.</p>
            </article>
            <article className="card pad">
              <h3>Can I book events?</h3>
              <p className="muted">Yes. Use the event enquiry form for weddings, birthdays, braais, conferences, and live music.</p>
            </article>
            <article className="card pad">
              <h3>Where are records stored?</h3>
              <p className="muted">Bookings are saved locally, exported as CSV, and can append to Google Sheets when credentials are added.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container split">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Book, reserve, or plan your event.</h2>
            <p className="section-copy">
              Call or WhatsApp the resort team, then use the booking form to create a trackable record
              with Ecocash payment status.
            </p>
            <p>
              <Phone size={18} /> {resortPhone}
            </p>
            <p>
              <MapPin size={18} /> Rainham, Zvimba District, Harare, Zimbabwe
            </p>
          </div>
          <div className="card pad">
            <h3>Quick booking</h3>
            <p className="muted">Choose a booking type and submit an Ecocash reference.</p>
            <div className="hero-actions">
              <BookingButton label="Book Room" bookingType="accommodation" packageName="Room booking" amount={50} />
              <BookingButton label="Reserve Table" bookingType="restaurant" packageName="Restaurant table" amount={20} variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

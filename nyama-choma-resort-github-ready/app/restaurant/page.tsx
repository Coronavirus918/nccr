import { BookingButton } from "@/components/BookingButton";
import { menuCategories } from "@/lib/content";

export default function RestaurantPage() {
  return (
    <main>
      <section className="section dark-band">
        <div className="container">
          <span className="eyebrow">Restaurant</span>
          <h1 className="section-title">Nyama choma, local dishes, drinks, and family platters.</h1>
          <p className="section-copy">
            Reserve a table and pay a deposit by Ecocash. Your reservation is recorded in the booking
            log for staff confirmation.
          </p>
          <BookingButton label="Reserve a Table" bookingType="restaurant" packageName="Restaurant table" amount={20} />
        </div>
      </section>
      <section className="section">
        <div className="container feature-grid">
          {menuCategories.map((category) => (
            <article className="card pad" key={category.title}>
              <h3>{category.title}</h3>
              <div className="pill-list">
                {category.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import { BookingButton } from "./BookingButton";
import { rooms } from "@/lib/content";

export function RoomsGrid() {
  return (
    <div className="rooms-grid">
      {rooms.map((room) => (
        <article className="card room-card" key={room.name}>
          <img src={room.image} alt={room.name} />
          <div className="pad">
            <h3>{room.name}</h3>
            <p className="muted">{room.description}</p>
            <div className="price">${room.price}/night</div>
            <div className="pill-list">
              {room.amenities.map((amenity) => (
                <span className="pill" key={amenity}>
                  {amenity}
                </span>
              ))}
            </div>
            <BookingButton
              label="Book room"
              bookingType="accommodation"
              packageName={room.name}
              amount={room.price}
              variant="dark"
            />
          </div>
        </article>
      ))}
    </div>
  );
}

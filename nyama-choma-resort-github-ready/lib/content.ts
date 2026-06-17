import { BedDouble, Bike, CalendarHeart, Dumbbell, Music, Utensils, Waves, Wine } from "lucide-react";

export const resortPhone = "+263 772 951 308";
export const resortWhatsApp = "263772951308";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Activities", href: "/#activities" },
  { label: "Events", href: "/#events" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Bookings", href: "/admin/bookings" },
  { label: "Contact", href: "/#contact" }
];

export const rooms = [
  {
    name: "Luxury Chalets",
    price: 80,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description: "Private lodge-style comfort with warm timber finishes, nature views, and space to unwind.",
    amenities: ["Queen bed", "Ensuite", "Outdoor seating", "Breakfast option"]
  },
  {
    name: "Family Rooms",
    price: 60,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    description: "Flexible family-friendly rooms close to the restaurant, pool, and outdoor activities.",
    amenities: ["Sleeps 4", "Ensuite", "Kids nearby", "Wi-Fi"]
  },
  {
    name: "Standard Rooms",
    price: 50,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    description: "Clean, comfortable accommodation for short stays, weekends, and business visitors.",
    amenities: ["Double bed", "Ensuite", "Desk", "Tea station"]
  },
  {
    name: "Lodge-Style Rooms",
    price: 55,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    description: "Safari lodge atmosphere with textured details and a relaxed Zimbabwean resort feel.",
    amenities: ["Twin option", "Ensuite", "Nature view", "Parking"]
  }
];

export const activities = [
  { title: "Quad Bikes", icon: Bike, text: "Outdoor rides for groups, families, and weekend guests." },
  { title: "Swimming", icon: Waves, text: "Cool off and spend slow afternoons by the pool." },
  { title: "Volleyball", icon: Dumbbell, text: "Active team fun for families, friends, and company outings." },
  { title: "Kids Games", icon: CalendarHeart, text: "A family-friendly atmosphere with safe outdoor play." },
  { title: "Live Music", icon: Music, text: "Warm evenings with entertainment, braais, and celebration energy." },
  { title: "Outdoor Dining", icon: Utensils, text: "Traditional nyama choma experiences in a nature setting." }
];

export const menuCategories = [
  {
    title: "Nyama Choma Specials",
    items: ["Chargrilled beef platter", "Goat nyama choma", "Mixed grill board", "Family braai platter"]
  },
  {
    title: "Local Dishes",
    items: ["Sadza and relish", "Roadrunner chicken", "Seasonal vegetables", "Peanut butter rice"]
  },
  {
    title: "Drinks",
    items: ["Soft drinks", "Mocktails", "Local refreshments", "Tea and coffee"]
  },
  {
    title: "Family Platters",
    items: ["Weekend sharing platter", "Kids grill plate", "Birthday table package", "Group feast"]
  }
];

export const eventPackages = [
  { title: "Weddings", icon: CalendarHeart, text: "Nature-rich celebration spaces for ceremonies and receptions." },
  { title: "Birthdays & Braais", icon: Wine, text: "Outdoor hosting with food, music, and family entertainment." },
  { title: "Conferences", icon: BedDouble, text: "A practical conference room with dining and accommodation options." }
];

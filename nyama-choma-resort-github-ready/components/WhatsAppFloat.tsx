import { MessageCircle } from "lucide-react";
import { resortWhatsApp } from "@/lib/content";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${resortWhatsApp}?text=Hello%20Nyama%20Choma%20Resort%2C%20I%20would%20like%20to%20make%20a%20booking.`}
    >
      <MessageCircle size={20} /> WhatsApp Us
    </a>
  );
}

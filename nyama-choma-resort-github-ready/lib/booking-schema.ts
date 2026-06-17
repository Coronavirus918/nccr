import { z } from "zod";

export const bookingSchema = z.object({
  customerName: z.string().min(2, "Enter the customer's name."),
  phone: z.string().min(7, "Enter a valid phone number."),
  whatsapp: z.string().min(7, "Enter a WhatsApp number."),
  email: z.string().email("Enter a valid email.").optional().or(z.literal("")),
  bookingType: z.enum(["accommodation", "restaurant", "event"]),
  date: z.string().min(1, "Choose a booking date."),
  time: z.string().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.coerce.number().int().min(1).max(500),
  packageName: z.string().min(2, "Choose or enter a package."),
  amount: z.coerce.number().min(0),
  ecocashNumber: z.string().min(7, "Enter the Ecocash sending number."),
  ecocashReference: z.string().min(3, "Enter the Ecocash confirmation/reference."),
  notes: z.string().optional()
});

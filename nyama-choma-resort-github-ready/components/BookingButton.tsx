"use client";

import { CalendarCheck } from "lucide-react";
import { useState } from "react";
import { BookingForm } from "./BookingForm";
import { BookingType } from "@/lib/types";

export function BookingButton({
  label,
  bookingType,
  packageName,
  amount,
  variant = "primary"
}: {
  label: string;
  bookingType: BookingType;
  packageName: string;
  amount: number;
  variant?: "primary" | "dark" | "light" | "outline";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={`btn btn-${variant}`} onClick={() => setOpen(true)}>
        <CalendarCheck size={18} /> {label}
      </button>
      <BookingForm
        open={open}
        onClose={() => setOpen(false)}
        defaults={{ bookingType, packageName, amount }}
      />
    </>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Nyama Choma Resort Zimbabwe",
  description:
    "Luxury African resort in Rainham, Zvimba District, Harare with nyama choma dining, accommodation, family activities, events, and Ecocash booking support.",
  keywords: [
    "nyama choma in Zimbabwe",
    "luxury African resort Harare",
    "family resort Zimbabwe",
    "accommodation in Harare",
    "nyama choma restaurant Harare",
    "East African cuisine Zimbabwe"
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}

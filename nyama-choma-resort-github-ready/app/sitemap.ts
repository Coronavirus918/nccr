import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nyama-choma-resort.example.com";

  return [
    "",
    "/restaurant",
    "/accommodation",
    "/admin/bookings"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}

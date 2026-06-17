# Nyama Choma Resort Zimbabwe

GitHub-ready Next.js website for Nyama Choma Resort Zimbabwe in Rainham, Zvimba District, Harare.

## What is included

- Premium African resort homepage with restaurant, accommodation, activities, events, gallery, and contact sections.
- Accommodation and restaurant pages.
- Floating WhatsApp button for `+263 772 951 308`.
- Ecocash booking flow for rooms, restaurant tables, and events.
- Customer booking fields: name, phone, WhatsApp, optional email, booking type, date/time, guests, package, amount, Ecocash number, Ecocash reference, and notes.
- Payment states: `pending`, `paid`, `failed`, `cancelled`.
- Staff dashboard at `/admin/bookings`.
- Manual Ecocash confirmation from the admin dashboard.
- CSV spreadsheet export at `/api/bookings/export`.
- Google Sheets-ready append layer using service-account environment variables.
- Paynow/Ecocash webhook placeholder at `/api/ecocash/webhook` for later real gateway credentials.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Staff dashboard

Open:

```text
/admin/bookings
```

New bookings appear with payment status `pending`. After staff confirm the Ecocash payment/reference, change the status to `paid`; the booking status becomes confirmed.

## Google Sheets setup

The app works without Google Sheets by storing bookings in `data/bookings.json` and allowing CSV export.

To append bookings to a live spreadsheet:

1. Create a Google Cloud service account.
2. Create a Google Sheet with a tab named `Bookings`.
3. Share the spreadsheet with the service account email.
4. Copy `.env.example` to `.env.local`.
5. Fill in:

```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
GOOGLE_SHEET_RANGE=Bookings!A:U
```

Columns are:

```text
id, createdAt, customerName, phone, whatsapp, email, bookingType, date, time, checkIn, checkOut, guests, packageName, amount, currency, paymentMethod, ecocashNumber, ecocashReference, paymentStatus, bookingStatus, notes
```

## Ecocash and Paynow notes

The current production-safe flow is manual:

1. Customer pays Ecocash to `+263 772 951 308`.
2. Customer enters the Ecocash sending number and transaction/reference.
3. Booking is saved with payment status `pending`.
4. Staff confirm the payment and mark it `paid` in `/admin/bookings`.

When Paynow/Ecocash merchant credentials are available, add them to:

```bash
PAYNOW_INTEGRATION_ID=
PAYNOW_INTEGRATION_KEY=
ECOCASH_MERCHANT_NUMBER=
```

Then complete the real initiation and webhook verification logic in `lib/ecocash.ts` and `app/api/ecocash/webhook/route.ts`.

## Deploy

This can be pushed directly to GitHub and deployed to Vercel, Render, Railway, or any Node hosting provider.

For production, use Google Sheets or a database for persistent bookings. Some serverless hosts do not persist local file writes in `data/bookings.json` between deployments.

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "../public/fonts/playfair-latin.woff2",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "../public/fonts/playfair-latin-italic.woff2",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/manrope-latin.woff2",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumière — Luxury Salon & Beauty Studio",
  description:
    "Where modern beauty meets personalized care. Premium hair, makeup, skincare and bridal services at Lumière Salon & Beauty Studio.",
  keywords: [
    "salon",
    "beauty studio",
    "hair styling",
    "bridal makeup",
    "facial",
    "spa",
    "luxury salon",
  ],
  openGraph: {
    title: "Lumière — Luxury Salon & Beauty Studio",
    description:
      "Where modern beauty meets personalized care. Your beauty. Your signature.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centraenergioptima.com"),
  title: "PT. Centra Energi Optima – Pertambangan, Perdagangan & Pemurnian Emas",
  description:
    "PT. Centra Energi Optima adalah perusahaan yang bergerak di bidang pertambangan emas, perdagangan, dan pemurnian emas yang berlokasi di Indonesia.",
  keywords: [
    "Centra Energi Optima",
    "pertambangan emas",
    "pemurnian emas",
    "perdagangan emas",
    "gold mining Indonesia",
    "PT Centra Energi Optima",
  ],
   alternates: {
    canonical: "/",
  },
  authors: [{ name: "PT. Centra Energi Optima" }],
  openGraph: {
    title:
      "PT. Centra Energi Optima – Pertambangan, Perdagangan & Pemurnian Emas",
    description:
      "Perusahaan pertambangan dan pemurnian emas di Indonesia, dengan operasi di Papua dan fasilitas di Tangerang.",
    url: "https://centraenergioptima.com/",
    siteName: "Centra Energi Optima",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        {/* Structured Data / Schema.org */}

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PT. Centra Energi Optima",
      "legalName": "PT. Centra Energi Optima",
      "url": "https://centraenergioptima.com/",
      "logo": "https://centraenergioptima.com/images/logo.png",
      "description": "PT. Centra Energi Optima bergerak di bidang pertambangan emas, perdagangan, dan pemurnian emas di Indonesia.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jakarta",
        "addressLocality": "Jakarta",
        "addressRegion": "DKI Jakarta",
        "addressCountry": "ID"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "info@centraenergioptima.com",
          "telephone": "+62",
          "areaServed": "ID"
        }
      ],
      "sameAs": [
        "https://instagram.com/centra.energi.optima",
        "https://www.linkedin.com/company/centraenergioptima"
      ]
    }),
  }}
/>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Аренда SUP-бордов в Сургуте | Прокат сапбордов | SUP-серфинг",
  description: "Прокат SUP-досок в Сургуте. Аренда сапбордов для отдыха на воде. Качественные доски, полная экипировка. Доступные цены, работаем круглосуточно.",
  keywords: [
    "аренда SUP-бордов Сургут",
    "прокат сапбордов",
    "SUP-серфинг",
    "аренда досок для SUP",
    "сапборды напрокат",
    "SUP-доски Сургут",
    "аренда сап оборудования",
    "SUP-прокат круглосуточно",
    "где взять SUP-борд",
    "стоимость аренды сапборда"
  ].join(", "),
  openGraph: {
    title: "Аренда SUP-бордов в Сургуте | Круглосуточный прокат",
    description: "Прокат SUP-досок для отдыха на воде. Полный комплект оборудования, помощь в обучении.",
    url: "https://sup-b.vercel.app/",
    siteName: "SUP Прокат Сургут",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://sup-b.vercel.app/",
  },
  metadataBase: new URL("https://sup-b.vercel.app/"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: [
      { url: '/sup.svg', type: 'image/svg+xml' },
      { url: '/sup_png.png', type: 'image/png' },
    ],
    apple: [
      { url: '/sup_png.png', sizes: '256x256', type: 'image/png' },  // Для iOS
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Rent Sup board",
  "name": "Аренда сап бордов в сургуте",
  "image": "https://sup-b.vercel.app/sup_png.png",
  "@id": "https://sup-b.vercel.app/",
  "url": "https://sup-b.vercel.app/",
  "telephone": "+7XXX-XXX-XX-XX",
  "priceRange": "от 1500",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Примерная, 123",
    "addressLocality": "Сургут",
    "addressRegion": "ХМАО-Югра",
    "postalCode": "628400",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "61.254035",
    "longitude": "73.396223"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://vk.com/ваша_группа",
    "https://t.me/ваш_канал"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-site-verification" content="7qoO-p_4DdzIVwec3H_bkT59v_wMZH5RMJxLx5YUOd0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-1`}
      >
        <Header className="sticky top-0 backdrop-blur-md z-10"/>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
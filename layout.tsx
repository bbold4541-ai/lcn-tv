import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LCN TV - Монголыг дэлхийтэй холбоно",
  description: "LCN TV - Олон улсын мультимедиа телевизийн платформ. Монголын мэдээ, соёл, түүх, нэвтрүүлгийг 15 хэлээр дэлхийн үзэгчдэд хүргэж байна.",
  keywords: "LCN TV, Mongolia, television, international, multilingual, news, culture, live tv, Mongolian TV",
  authors: [{ name: "LCN TV" }],
  creator: "LCN TV",
  publisher: "LCN TV",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    url: "https://lcn-tv.com",
    siteName: "LCN TV",
    title: "LCN TV - Монголыг дэлхийтэй холбоно",
    description: "Олон улсын мультимедиа телевизийн платформ. 15 хэл дэмждэг.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LCN TV - International Television Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LCN TV - Монголыг дэлхийтэй холбоно",
    description: "Олон улсын мультимедиа телевизийн платформ. 15 хэл дэмждэг.",
    images: ["/og-image.jpg"],
    creator: "@lcntv",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://lcn-tv.com",
    languages: {
      "en": "https://lcn-tv.com/en",
      "mn": "https://lcn-tv.com",
      "zh": "https://lcn-tv.com/zh",
      "ru": "https://lcn-tv.com/ru",
    },
  },
  category: "television",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" dir="ltr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#0a0a14" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="LCN TV" />
        <meta name="msapplication-TileColor" content="#c9a227" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased min-h-screen bg-dark-900">
        {children}
      </body>
    </html>
  );
}

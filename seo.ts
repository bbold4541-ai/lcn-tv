import { type Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function generateSEO({
  title = "LCN TV - Монголыг дэлхийтэй холбоно",
  description = "LCN TV - Олон улсын мультимедиа телевизийн платформ. Монголын мэдээ, соёл, түүх, нэвтрүүлгийг 15 хэлээр дэлхийн үзэгчдэд хүргэж байна.",
  keywords = "LCN TV, Mongolia, television, international, multilingual, news, culture, live tv",
  image = "/og-image.jpg",
  url = "https://lcn-tv.com",
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url,
      type: "website",
      locale: "mn_MN",
      siteName: "LCN TV",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  };
}

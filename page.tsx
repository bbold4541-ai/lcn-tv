"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import LanguageVillage from "@/components/LanguageVillage";
import NewsPreview from "@/components/NewsPreview";
import VideoPreview from "@/components/VideoPreview";
import SportPreview from "@/components/SportPreview";
import GlobalTicker from "@/components/GlobalTicker";
import PeaceTicker from "@/components/PeaceTicker";
import LCN_AI from "@/components/LCN_AI";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="mobile-pb">
        {/* Global Language Ticker */}
        <div className="pt-32 md:pt-36">
          <GlobalTicker />
        </div>

        {/* Peace Ticker */}
        <PeaceTicker />

        {/* Hero Section */}
        <HeroSection />

        {/* Language Village */}
        <LanguageVillage />

        {/* News Preview */}
        <NewsPreview />

        {/* Video Preview */}
        <VideoPreview />

        {/* Sport Preview */}
        <SportPreview />
      </main>

      <Footer />
      <BottomNav />
      <LCN_AI />
    </div>
  );
}

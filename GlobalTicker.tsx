"use client";

import { languages } from "@/lib/i18n";
import { Globe } from "lucide-react";

export default function GlobalTicker() {
  const tickerContent = languages.map((lang) => (
    <span key={lang.code} className="inline-flex items-center gap-2 mx-6 flex-shrink-0">
      <span className="text-lg">{lang.flag}</span>
      <span className="text-gold-300 font-medium">{lang.nativeName}</span>
      <span className="text-gray-400">{lang.welcome}</span>
      <span className="text-gold-500/50 mx-2">|</span>
    </span>
  ));

  return (
    <div className="relative bg-dark-100/80 backdrop-blur-md border-y border-gold-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Fixed Title */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-dark-200/90 border-r border-gold-500/30 flex-shrink-0 z-10">
          <Globe className="w-4 h-4 text-gold-400" />
          <span className="text-gold-300 font-bold text-sm whitespace-nowrap">
            🇲🇳 Таны төрөлх хэлээр Монгол Улс
          </span>
        </div>

        {/* Scrolling Content */}
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="ticker-content flex">
            {tickerContent}
            {tickerContent}
            {tickerContent}
          </div>
        </div>
      </div>
    </div>
  );
}

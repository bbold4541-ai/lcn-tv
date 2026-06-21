"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { languages, type Language } from "@/lib/i18n";
import { Globe, ArrowRight, Sparkles } from "lucide-react";

interface GerYurtProps {
  flag: string;
  nativeName: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

function GerYurt({ flag, nativeName, name, isActive, onClick, index }: GerYurtProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
        isActive
          ? "bg-gold-500/20 border-2 border-gold-400 gold-glow scale-105"
          : "bg-dark-100/50 border border-gold-500/20 hover:border-gold-500/50 hover:bg-gold-500/10"
      }`}
    >
      {/* 3D Ger SVG - Premium Version */}
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        <svg
          viewBox="0 0 200 180"
          className="w-full h-full drop-shadow-2xl"
          style={{ filter: "drop-shadow(0 10px 20px rgba(201, 162, 39, 0.3))" }}
        >
          <defs>
            <linearGradient id={`ger-grad-${nativeName}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5f0e8" />
              <stop offset="50%" stopColor="#e8e0d0" />
              <stop offset="100%" stopColor="#d4c8b0" />
            </linearGradient>
            <linearGradient id={`ger-roof-${nativeName}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f0ebe3" />
              <stop offset="100%" stopColor="#c9b896" />
            </linearGradient>
            <radialGradient id={`ger-light-${nativeName}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0c52e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f0c52e" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`door-grad-${nativeName}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8c6d1b" />
              <stop offset="100%" stopColor="#5a4411" />
            </linearGradient>
            <filter id={`glow-${nativeName}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Ground shadow */}
          <ellipse cx="100" cy="170" rx="85" ry="12" fill="rgba(0,0,0,0.4)" />

          {/* Ger Base */}
          <ellipse cx="100" cy="155" rx="80" ry="15" fill={`url(#ger-grad-${nativeName})`} />
          <path
            d="M 20 155 Q 20 100 100 100 Q 180 100 180 155"
            fill={`url(#ger-grad-${nativeName})`}
            stroke="#c9b896"
            strokeWidth="1"
          />

          {/* Roof */}
          <path
            d="M 30 110 Q 100 20 170 110 Q 100 90 30 110"
            fill={`url(#ger-roof-${nativeName})`}
            stroke="#b8a880"
            strokeWidth="1"
          />

          {/* Roof ring (toono) */}
          <ellipse cx="100" cy="55" rx="12" ry="6" fill="#d4c8b0" stroke="#b8a880" strokeWidth="1" />
          <ellipse cx="100" cy="53" rx="8" ry="4" fill="#1a1a2e" />

          {/* Decorative bands */}
          <path d="M 25 130 Q 100 120 175 130" fill="none" stroke="#c9a227" strokeWidth="2" opacity="0.6" />
          <path d="M 22 140 Q 100 130 178 140" fill="none" stroke="#c9a227" strokeWidth="1.5" opacity="0.4" />
          <path d="M 20 148 Q 100 138 180 148" fill="none" stroke="#c9a227" strokeWidth="1" opacity="0.3" />

          {/* Door */}
          <rect x="85" y="125" width="30" height="30" rx="15" fill={`url(#door-grad-${nativeName})`} />
          <rect x="88" y="128" width="24" height="24" rx="12" fill="#1a1a2e" />

          {/* Door light glow */}
          <circle cx="100" cy="140" r="15" fill={`url(#ger-light-${nativeName})`} opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Door frame decoration */}
          <rect x="82" y="122" width="36" height="36" rx="18" fill="none" stroke="#c9a227" strokeWidth="1.5" opacity="0.7" />

          {/* Side decorations */}
          <circle cx="50" cy="140" r="4" fill="#c9a227" opacity="0.5" />
          <circle cx="150" cy="140" r="4" fill="#c9a227" opacity="0.5" />
          <circle cx="35" cy="135" r="3" fill="#c9a227" opacity="0.4" />
          <circle cx="165" cy="135" r="3" fill="#c9a227" opacity="0.4" />

          {/* Flag pole */}
          <line x1="100" y1="55" x2="100" y2="15" stroke="#8c6d1b" strokeWidth="2" />

          {/* Flag */}
          <g transform="translate(100, 15)">
            <rect x="0" y="0" width="28" height="18" rx="2" fill="white" stroke="#ccc" strokeWidth="0.5" />
            <text x="14" y="13" fontSize="12" textAnchor="middle">{flag}</text>
          </g>

          {/* Ropes (shana) */}
          <line x1="30" y1="110" x2="20" y2="160" stroke="#c9b896" strokeWidth="1" opacity="0.5" />
          <line x1="170" y1="110" x2="180" y2="160" stroke="#c9b896" strokeWidth="1" opacity="0.5" />
          <line x1="50" y1="100" x2="45" y2="158" stroke="#c9b896" strokeWidth="1" opacity="0.4" />
          <line x1="150" y1="100" x2="155" y2="158" stroke="#c9b896" strokeWidth="1" opacity="0.4" />

          {/* Small lights around ger */}
          <circle cx="30" cy="165" r="2" fill="#f0c52e" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="170" cy="165" r="2" fill="#f0c52e" opacity="0.6">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="168" r="2" fill="#f0c52e" opacity="0.5">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Language Labels */}
      <div className="text-center">
        <div className="text-gold-300 font-bold text-sm md:text-base">{nativeName}</div>
        <div className="text-gray-500 text-xs">{name}</div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(201, 162, 39, 0.1) 0%, transparent 70%)",
        }}
      />
    </motion.button>
  );
}

export default function LanguageVillage() {
  const [selectedLang, setSelectedLang] = useState<Language | null>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-100 to-dark-900" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-gold-400" />
            <h2 className="text-3xl md:text-5xl font-black text-gold-gradient">
              ХЭЛНИЙ ТӨВ
            </h2>
          </div>
          <p className="text-gold-400/80 text-lg md:text-xl font-light tracking-wide">
            Language Hub
          </p>
          <div className="w-24 h-1 bg-gold-500/50 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base leading-relaxed">
            LCN TV - Монголын мэдээ, соёл, түүх, нэвтрүүлгийг 15 хэлээр дэлхийн үзэгчдэд хүргэж байна.
          </p>
        </motion.div>

        {/* Language Grid */}
        <div className="language-grid">
          {languages.map((lang, index) => (
            <GerYurt
              key={lang.code}
              flag={lang.flag}
              nativeName={lang.nativeName}
              name={lang.name}
              isActive={selectedLang === lang.code}
              onClick={() => setSelectedLang(lang.code)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="glass-gold rounded-2xl p-6 flex items-center gap-4 max-w-xl">
            <Sparkles className="w-8 h-8 text-gold-400 flex-shrink-0" />
            <div>
              <p className="text-gold-200 text-sm md:text-base">
                Та өөрийн хэлийг сонгон LCN TV-ийн бүх контентыг эх хэл дээрээ үзээрэй.
              </p>
            </div>
          </div>
          <Link href="/language-center/">
            <motion.div 
              className="flex items-center gap-2 px-6 py-4 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400 hover:bg-gold-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">ХЭЛ СОНГОХ</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Radio,
  Newspaper,
  Video,
  Globe,
  Trophy,
  Calendar,
  CloudSun,
  Banknote,
  Search,
  Bell,
  Menu,
  X,
  ChevronDown,
  Shield,
} from "lucide-react";
import { languages, type Language } from "@/lib/i18n";

const navItems = [
  { href: "/", label: "Нүүр", icon: Home, labelEn: "Home" },
  { href: "/live/", label: "LIVE", icon: Radio, labelEn: "Live" },
  { href: "/news/", label: "Мэдээ", icon: Newspaper, labelEn: "News" },
  { href: "/video/", label: "Видео", icon: Video, labelEn: "Video" },
  { href: "/language-center/", label: "Хэлний төв", icon: Globe, labelEn: "Language" },
  { href: "/sport/", label: "LCN Sport", icon: Trophy, labelEn: "Sport" },
  { href: "/programs/", label: "Хөтөлбөр", icon: Calendar, labelEn: "Programs" },
  { href: "/weather/", label: "Цаг агаар", icon: CloudSun, labelEn: "Weather" },
  { href: "/currency/", label: "Валют", icon: Banknote, labelEn: "Currency" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>("mn");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    setLangDropdownOpen(false);
  };

  const currentLangConfig = languages.find((l) => l.code === currentLang);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-dark-500/95 backdrop-blur-xl shadow-lg shadow-gold-500/5" : ""
    }`}>
      {/* Top Bar with Social & Ticker */}
      <div className="bg-dark-900/95 backdrop-blur-md border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {["facebook", "youtube", "instagram", "tiktok"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {social === "facebook" && <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>}
                  {social === "youtube" && <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z"/>}
                  {social === "instagram" && <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"/>}
                  {social === "tiktok" && <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>}
                </svg>
              </a>
            ))}
          </div>

          {/* Ticker */}
          <div className="flex-1 mx-4 overflow-hidden">
            <div className="ticker-container">
              <div className="ticker-content text-sm text-gold-300">
                {languages.map((lang) => (
                  <span key={lang.code} className="mx-6 inline-flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.welcome}</span>
                    <span className="text-gold-500/50">•</span>
                  </span>
                ))}
                {languages.map((lang) => (
                  <span key={`dup-${lang.code}`} className="mx-6 inline-flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.welcome}</span>
                    <span className="text-gold-500/50">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <motion.button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/30 hover:bg-gold-500/20 transition-all"
            >
              <span className="text-lg">{currentLangConfig?.flag}</span>
              <span className="text-sm text-gold-300 hidden sm:inline">{currentLangConfig?.nativeName}</span>
              <ChevronDown className="w-4 h-4 text-gold-400" />
            </motion.button>
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-dark-100 border border-gold-500/30 rounded-xl shadow-2xl shadow-gold-500/10 z-50 max-h-80 overflow-y-auto"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gold-500/10 transition-colors ${
                        currentLang === lang.code ? "bg-gold-500/20" : ""
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <div className="text-left">
                        <div className="text-sm text-gold-200">{lang.nativeName}</div>
                        <div className="text-xs text-gray-500">{lang.name}</div>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-dark-500/90 backdrop-blur-lg border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 text-gold-400 hover:text-gold-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>

            {/* Logo */}
            <Link href="/" className="flex flex-col items-center">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl md:text-4xl font-black text-gold-gradient tracking-wider">LCN</span>
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="12" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M12 12v.01" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
              </motion.div>
              <span className="text-xs md:text-sm text-gold-400/80 tracking-widest mt-1">
                Монголыг дэлхийтэй холбоно
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "text-gold-400 bg-gold-500/10 border border-gold-500/30"
                          : "text-gray-300 hover:text-gold-300 hover:bg-gold-500/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      {item.label === "LIVE" && (
                        <span className="w-2 h-2 bg-red-500 rounded-full live-indicator" />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-400 hover:text-gold-400 transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-400 hover:text-gold-400 transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </motion.button>
              <Link href="/admin/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-lg text-gold-400 hover:bg-gold-500/20 transition-all text-sm"
                >
                  <Shield className="w-4 h-4" />
                  <span>Админ</span>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-500/98 backdrop-blur-xl border-b border-gold-500/20 overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "text-gold-400 bg-gold-500/10 border border-gold-500/30"
                          : "text-gray-300 hover:text-gold-300 hover:bg-gold-500/5"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                      {item.label === "LIVE" && (
                        <span className="w-2 h-2 bg-red-500 rounded-full live-indicator" />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

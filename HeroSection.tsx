"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, Globe, Radio } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Монголыг дэлхийтэй холбоно",
      subtitle: "LCN TV - Олон улсын мультимедиа телевизийн платформ",
      description: "Монголын мэдээ, соёл, түүх, нэвтрүүлгийг 15 хэлээр дэлхийн үзэгчдэд хүргэж байна.",
    },
    {
      title: "Бидний эрхэм зүйл бол хүн та билээ",
      subtitle: "Энх тайвны мессеж",
      description: "Хүн таньдаг хүнээ, таньдаг зүйлээ үгүй болоход л харамсдаг. Тиймээс бид бие биенээ таньж мэдэцгээе.",
    },
    {
      title: "Таны төрөлх хэлээр Монгол Улс",
      subtitle: "Хэлний төв",
      description: "15 хэл дээр контент үзэх боломжтой. Өөрийн хэлийг сонгоод эхлээрэй.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg" />

      {/* World Map Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none">
          <defs>
            <radialGradient id="world-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c9a227" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="500" cy="250" r="200" fill="url(#world-glow)" />
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 500}
              r={Math.random() * 2 + 1}
              fill="#c9a227"
              opacity={Math.random() * 0.5 + 0.2}
            >
              <animate
                attributeName="opacity"
                values={`${Math.random() * 0.5 + 0.2};${Math.random() * 0.8 + 0.4};${Math.random() * 0.5 + 0.2}`}
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>

      {/* Light Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="w-4 h-4 animate-spin-slow" />
            <span>15 хэл дэмждэг олон улсын платформ</span>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gold-gradient mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gold-400/80 mb-4 font-light">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/live/">
            <motion.div 
              className="group flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-dark-900 rounded-xl font-bold text-lg transition-all gold-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Radio className="w-5 h-5" />
              <span>Шууд үзэх</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
          <Link href="/language-center/">
            <motion.div 
              className="flex items-center gap-3 px-8 py-4 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 rounded-xl font-medium text-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
              <span>Хэл сонгох</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-gold-400"
                  : "w-2 bg-gold-400/30 hover:bg-gold-400/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}

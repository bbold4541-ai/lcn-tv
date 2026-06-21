"use client";

import Link from "next/link";
import { Trophy, ChevronRight, Football, CircleDot } from "lucide-react";

const sportCategories = [
  { id: "football", label: "Хөлбөмбөг", icon: "⚽" },
  { id: "basketball", label: "Сагсан бөмбөг", icon: "🏀" },
  { id: "international", label: "Олон улс", icon: "🌍" },
  { id: "highlights", label: "Онцлох", icon: "⭐" },
];

const demoSports = [
  {
    id: 1,
    category: "football",
    title: "Монголын шигшээ баг Азийн аварга шалгаруулах тэмцээнд",
    team1: "Монгол",
    team2: "Япон",
    score: "1 - 3",
    status: "Дууссан",
    date: "2026-06-20",
  },
  {
    id: 2,
    category: "basketball",
    title: "Монголын сагсан бөмбөгийн лигийн шигшээ тоглолт",
    team1: "Хасын Хүлэг",
    team2: "Богд Хан",
    score: "89 - 76",
    status: "Дууссан",
    date: "2026-06-19",
  },
  {
    id: 3,
    category: "international",
    title: "Олимпийн бэлтгэл: Монголын тамирчид",
    team1: "Монгол",
    team2: "Олон улс",
    score: "-",
    status: "Удахгүй",
    date: "2026-06-25",
  },
  {
    id: 4,
    category: "highlights",
    title: "Долоо хоногийн шилдэг мөчүүд",
    team1: "Шилдэг",
    team2: "Мөчүүд",
    score: "🏆",
    status: "Бичлэг",
    date: "2026-06-21",
  },
];

export default function SportPreview() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-100 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Trophy className="w-8 h-8 text-gold-400" />
            <h2 className="text-3xl md:text-4xl font-black text-gold-gradient">
              LCN SPORT
            </h2>
          </div>
          <Link href="/sport/" className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors">
            <span className="text-sm font-medium">Бүх спорт</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Sport Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demoSports.map((sport) => (
            <Link key={sport.id} href="/sport/" className="group relative rounded-2xl overflow-hidden card-hover bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-medium rounded-full border border-gold-500/20">
                  {sportCategories.find((c) => c.id === sport.category)?.label}
                </span>
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                  sport.status === "Дууссан" 
                    ? "bg-green-500/10 text-green-400 border-green-500/20" 
                    : sport.status === "Удахгүй"
                    ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                }`}>
                  {sport.status}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-200 group-hover:text-gold-300 transition-colors mb-4">
                {sport.title}
              </h3>

              {/* Score Display */}
              <div className="flex items-center justify-between bg-dark-200/50 rounded-xl p-4 border border-gold-500/10">
                <div className="text-center flex-1">
                  <div className="text-2xl mb-1">{sportCategories.find((c) => c.id === sport.category)?.icon || "🏆"}</div>
                  <div className="text-sm font-bold text-gray-300">{sport.team1}</div>
                </div>
                <div className="px-4">
                  <div className="text-2xl md:text-3xl font-black text-gold-400">{sport.score}</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-2xl mb-1">{sportCategories.find((c) => c.id === sport.category)?.icon || "🏆"}</div>
                  <div className="text-sm font-bold text-gray-300">{sport.team2}</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500 text-right">
                {sport.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { Trophy, Football, CircleDot, Globe, Star, ChevronRight, Clock, Activity } from "lucide-react";

const sportCategories = [
  { id: "all", label: "Бүгд" },
  { id: "football", label: "Хөлбөмбөг" },
  { id: "basketball", label: "Сагсан бөмбөг" },
  { id: "international", label: "Олон улс" },
  { id: "highlights", label: "Онцлох" },
];

const demoMatches = [
  {
    id: 1,
    category: "football",
    title: "Монголын шигшээ баг Азийн аварга шалгаруулах тэмцээнд",
    team1: "Монгол",
    team2: "Япон",
    score: "1 - 3",
    status: "Дууссан",
    date: "2026-06-20",
    league: "Азийн аварга шалгаруулах",
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
    league: "Монголын лиг",
  },
  {
    id: 3,
    category: "international",
    title: "Олимпийн бэлтгэл: Монголын тамирчид",
    team1: "Монгол",
    team2: "Бэлтгэл",
    score: "-",
    status: "Удахгүй",
    date: "2026-06-25",
    league: "Олимп 2028",
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
    league: "LCN Sport",
  },
  {
    id: 5,
    category: "football",
    title: "Монголын лиг: Эрчим - Хоромхон",
    team1: "Эрчим",
    team2: "Хоромхон",
    score: "2 - 2",
    status: "Дууссан",
    date: "2026-06-18",
    league: "Монголын лиг",
  },
  {
    id: 6,
    category: "basketball",
    title: "Азийн сагсан бөмбөгийн аварга",
    team1: "Монгол",
    team2: "Солонгос",
    score: "78 - 85",
    status: "Дууссан",
    date: "2026-06-15",
    league: "Азийн аварга",
  },
];

export default function SportPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMatches = activeCategory === "all" 
    ? demoMatches 
    : demoMatches.filter((m) => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-gold-400" />
            <h1 className="text-3xl md:text-4xl font-black text-gold-gradient">
              LCN SPORT
            </h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {sportCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                    : "bg-dark-100/50 text-gray-400 border border-gold-500/10 hover:text-gold-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Matches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMatches.map((match) => (
              <div key={match.id} className="group relative rounded-2xl overflow-hidden card-hover bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-medium rounded-full border border-gold-500/20">
                    {match.league}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    match.status === "Дууссан" 
                      ? "bg-green-500/10 text-green-400 border-green-500/20" 
                      : match.status === "Удахгүй"
                      ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                  }`}>
                    {match.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-200 group-hover:text-gold-300 transition-colors mb-4">
                  {match.title}
                </h3>

                {/* Score Display */}
                <div className="flex items-center justify-between bg-dark-200/50 rounded-xl p-4 border border-gold-500/10">
                  <div className="text-center flex-1">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-sm font-bold text-gray-300">{match.team1}</div>
                  </div>
                  <div className="px-4">
                    <div className="text-3xl md:text-4xl font-black text-gold-400">{match.score}</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-sm font-bold text-gray-300">{match.team2}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {match.date}
                  </div>
                  <button className="flex items-center gap-1 text-gold-400 text-sm hover:text-gold-300 transition-colors">
                    <span>Дэлгэрэнгүй</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
      <LCN_AI />
    </div>
  );
}

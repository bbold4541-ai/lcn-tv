"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { Video, Play, Star, Clock, Flame, Eye, ChevronRight, Grid3X3, List } from "lucide-react";

const videoCategories = [
  { id: "all", label: "Бүгд" },
  { id: "featured", label: "Онцлох" },
  { id: "latest", label: "Шинэ" },
  { id: "popular", label: "Алдартай" },
  { id: "documentary", label: "Баримтат" },
  { id: "culture", label: "Соёл" },
  { id: "travel", label: "Аялал" },
];

const demoVideos = [
  {
    id: 1,
    title: "Монголын гайхамшигт байгалийн үзэмж",
    category: "featured",
    duration: "12:34",
    views: 45600,
    date: "2026-06-21",
    description: "Монголын өвөрмөц байгалийн үзэсгэлэнт газруудыг харуулсан баримтат кино",
  },
  {
    id: 2,
    title: "Улаанбаатар хотын шөнийн амьдрал",
    category: "latest",
    duration: "08:45",
    views: 12300,
    date: "2026-06-20",
    description: "Монголын нийслэл хотын шөнийн амьдрал, соёл, хөгжим",
  },
  {
    id: 3,
    title: "Монголын уламжлалт хоолны нууц",
    category: "popular",
    duration: "15:20",
    views: 78900,
    date: "2026-06-15",
    description: "Монголын уламжлалт хоол хүнс, түүх, соёл",
  },
  {
    id: 4,
    title: "Говийн үндэсний парк - Аялалын хөтөвч",
    category: "featured",
    duration: "22:10",
    views: 34500,
    date: "2026-06-18",
    description: "Говийн бүс нутагт аялах гарын авлага",
  },
  {
    id: 5,
    title: "Монголын түүх: Чингис хааны өв",
    category: "latest",
    duration: "18:55",
    views: 56700,
    date: "2026-06-19",
    description: "Чингис хаан болон Монголын эзэнт гүрний түүх",
  },
  {
    id: 6,
    title: "Монголын орчин үеийн урлаг",
    category: "popular",
    duration: "10:30",
    views: 23400,
    date: "2026-06-17",
    description: "Орчин үеийн монгол урлаг, уран бүтээлчид",
  },
  {
    id: 7,
    title: "Монголын мал аж ахуй - Дэлхийн өв",
    category: "documentary",
    duration: "25:00",
    views: 41200,
    date: "2026-06-16",
    description: "Монголын уламжлалт мал аж ахуй, нүүдэлчин соёл",
  },
  {
    id: 8,
    title: "Хөвсгөл далай - Монголын гол мөрөн",
    category: "travel",
    duration: "14:15",
    views: 38900,
    date: "2026-06-14",
    description: "Хөвсгөл нуур, түүний гайхамшиг, аялал",
  },
  {
    id: 9,
    title: "Монголын уламжлалт хувцас - Дээл",
    category: "culture",
    duration: "11:20",
    views: 29800,
    date: "2026-06-13",
    description: "Монгол дээл, түүх, урласан арга, орчин үеийн загвар",
  },
];

export default function VideoPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredVideos = activeCategory === "all" 
    ? demoVideos 
    : demoVideos.filter((v) => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Video className="w-8 h-8 text-gold-400" />
              <h1 className="text-3xl md:text-4xl font-black text-gold-gradient">
                ВИДЕО
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-gold-500/20 text-gold-400" : "text-gray-400"}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-gold-500/20 text-gold-400" : "text-gray-400"}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {videoCategories.map((cat) => (
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

          {/* Video Grid/List */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredVideos.map((video) => (
              <div key={video.id} className={`group relative rounded-2xl overflow-hidden card-hover bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 ${viewMode === "list" ? "flex gap-4 p-4" : ""}`}>
                {/* Thumbnail */}
                <div className={`relative bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center overflow-hidden ${viewMode === "grid" ? "aspect-video" : "w-48 h-28 flex-shrink-0 rounded-xl"}`}>
                  <Video className={`text-gold-500/20 ${viewMode === "grid" ? "w-12 h-12" : "w-8 h-8"}`} />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark-900/60">
                    <div className={`rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center backdrop-blur-sm ${viewMode === "grid" ? "w-16 h-16" : "w-12 h-12"}`}>
                      <Play className={`text-gold-400 fill-gold-400 ml-1 ${viewMode === "grid" ? "w-8 h-8" : "w-6 h-6"}`} />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className={`absolute bg-dark-900/80 rounded-md text-xs text-white font-medium ${viewMode === "grid" ? "bottom-3 right-3 px-2 py-1" : "bottom-2 right-2 px-1.5 py-0.5"}`}>
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className={`absolute ${viewMode === "grid" ? "top-3 left-3" : "top-2 left-2"}`}>
                    <span className={`text-xs font-medium rounded-full border ${
                      video.category === "featured" 
                        ? "bg-gold-500/20 text-gold-400 border-gold-500/30" 
                        : video.category === "latest"
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        : video.category === "popular"
                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                        : "bg-purple-500/20 text-purple-400 border-purple-500/30"
                    } ${viewMode === "grid" ? "px-2 py-1" : "px-1.5 py-0.5"}`}>
                      {videoCategories.find((c) => c.id === video.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className={viewMode === "grid" ? "p-4" : "flex-1 min-w-0"}>
                  <h3 className={`font-bold text-gray-200 group-hover:text-gold-300 transition-colors line-clamp-2 mb-2 ${viewMode === "grid" ? "text-sm md:text-base" : "text-base"}`}>
                    {video.title}
                  </h3>
                  {viewMode === "list" && (
                    <p className="text-gray-400 text-sm line-clamp-1 mb-2">{video.description}</p>
                  )}
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.date}
                    </span>
                  </div>
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

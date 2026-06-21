"use client";

import Link from "next/link";
import { Video, Play, ChevronRight, Eye, Clock, Star, Flame } from "lucide-react";

const videoTabs = [
  { id: "featured", label: "Онцлох", icon: Star },
  { id: "latest", label: "Шинэ", icon: Clock },
  { id: "popular", label: "Алдартай", icon: Flame },
];

const demoVideos = [
  {
    id: 1,
    title: "Монголын гайхамшигт байгалийн үзэмж",
    category: "featured",
    duration: "12:34",
    views: 45600,
    date: "2026-06-21",
  },
  {
    id: 2,
    title: "Улаанбаатар хотын шөнийн амьдрал",
    category: "latest",
    duration: "08:45",
    views: 12300,
    date: "2026-06-20",
  },
  {
    id: 3,
    title: "Монголын уламжлалт хоолны нууц",
    category: "popular",
    duration: "15:20",
    views: 78900,
    date: "2026-06-15",
  },
  {
    id: 4,
    title: "Говийн үндэсний парк - Аялалын хөтөвч",
    category: "featured",
    duration: "22:10",
    views: 34500,
    date: "2026-06-18",
  },
  {
    id: 5,
    title: "Монголын түүх: Чингис хааны өв",
    category: "latest",
    duration: "18:55",
    views: 56700,
    date: "2026-06-19",
  },
  {
    id: 6,
    title: "Монголын орчин үеийн урлаг",
    category: "popular",
    duration: "10:30",
    views: 23400,
    date: "2026-06-17",
  },
];

export default function VideoPreview() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-100 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Video className="w-8 h-8 text-gold-400" />
            <h2 className="text-3xl md:text-4xl font-black text-gold-gradient">
              ВИДЕО
            </h2>
          </div>
          <Link href="/video/" className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors">
            <span className="text-sm font-medium">Бүх видео</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoVideos.map((video) => (
            <Link key={video.id} href="/video/" className="group relative rounded-2xl overflow-hidden card-hover bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30">
              {/* Thumbnail */}
              <div className="aspect-video relative bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center overflow-hidden">
                <Video className="w-12 h-12 text-gold-500/20" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark-900/60">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-gold-400 fill-gold-400 ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-dark-900/80 rounded-md text-xs text-white font-medium">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${
                    video.category === "featured" 
                      ? "bg-gold-500/20 text-gold-400 border-gold-500/30" 
                      : video.category === "latest"
                      ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      : "bg-red-500/20 text-red-400 border-red-500/30"
                  }`}>
                    {videoTabs.find((t) => t.id === video.category)?.label}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-sm md:text-base font-bold text-gray-200 group-hover:text-gold-300 transition-colors line-clamp-2 mb-2">
                  {video.title}
                </h3>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

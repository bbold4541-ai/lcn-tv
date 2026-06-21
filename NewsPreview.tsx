"use client";

import { useState } from "react";
import Link from "next/link";
import { Newspaper, ChevronRight, Clock, Eye, TrendingUp, Landmark, Coins, Plane, Palette, GraduationCap, Globe, Cpu } from "lucide-react";

const newsCategories = [
  { id: "politics", label: "Улс төр", icon: Landmark, color: "text-red-400" },
  { id: "economy", label: "Эдийн засаг", icon: Coins, color: "text-green-400" },
  { id: "tourism", label: "Аялал", icon: Plane, color: "text-blue-400" },
  { id: "culture", label: "Соёл", icon: Palette, color: "text-purple-400" },
  { id: "education", label: "Боловсрол", icon: GraduationCap, color: "text-yellow-400" },
  { id: "international", label: "Олон улс", icon: Globe, color: "text-cyan-400" },
  { id: "technology", label: "Технологи", icon: Cpu, color: "text-pink-400" },
];

const demoNews = [
  {
    id: 1,
    category: "politics",
    title: "Монгол Улс олон улсын тайван байдлын өдрийг тэмдэглэж байна",
    excerpt: "НҮБ-ын Ерөнхий Ассамблейн тогтоолоор жил бүрийн 9 дүгээр сарын 21-ний өдрийг олон улсын тайван байдлын өдөр болгон зарласан...",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed0a6f8a?w=800&h=500&fit=crop",
    date: "2026-06-21",
    views: 12450,
    featured: true,
  },
  {
    id: 2,
    category: "economy",
    title: "Монголын эдийн засаг 2026 онд 5.8% өсөх төлөвтэй байна",
    excerpt: "Дэлхийн банкнаас гаргасан шинэ тайлангаар Монгол Улсын эдийн засаг 2026 онд 5.8% өсөхөөр төлөвлөж байна...",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
    date: "2026-06-20",
    views: 8930,
    featured: false,
  },
  {
    id: 3,
    category: "tourism",
    title: "Говийн бүсэд шинэ экотуризмын төсөл эхэллээ",
    excerpt: "Монголын говийн бүс нутагт шинэ экотуризмын төсөл хэрэгжүүлэхээр боллоо. Энэхүү төсөл нь тогтвортой аялал жуулчлалыг дэмжихэд чиглэгдэнэ...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    date: "2026-06-19",
    views: 7650,
    featured: false,
  },
  {
    id: 4,
    category: "culture",
    title: "Наадам 2026: Үндэсний их баяр наадмын бэлтгэл эхэллээ",
    excerpt: "Монгол Улсын үндэсний их баяр наадмын бэлтгэл ажил эхэллээ. Энэ жилийн наадам онцлог арга хэмжээтэй болохоор төлөвлөж байна...",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=500&fit=crop",
    date: "2026-06-18",
    views: 15200,
    featured: false,
  },
  {
    id: 5,
    category: "technology",
    title: "Монголд 5G сүлжээ ирэх онд нэвтрэхээр төлөвлөж байна",
    excerpt: "Монгол Улсад 5G гар утасны сүлжээг 2027 онд нэвтрүүлэхээр төлөвлөж байна. Энэ нь дижитал шилжилтийг хурдасгахад чухал алхам болно...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    date: "2026-06-17",
    views: 9870,
    featured: false,
  },
  {
    id: 6,
    category: "international",
    title: "Монгол-Японы хамтын ажиллагаа шинэ шатанд гарлаа",
    excerpt: "Монгол Улс болон Япон Улсын хооронд хамтын ажиллагааны шинэ хэлэлцээрт гарын үсэг зурсан нь хоёр улсын харилцааг шинэ шатанд гаргалаа...",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=500&fit=crop",
    date: "2026-06-16",
    views: 11200,
    featured: false,
  },
];

export default function NewsPreview() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews = activeCategory === "all" 
    ? demoNews 
    : demoNews.filter((news) => news.category === activeCategory);

  const featuredNews = demoNews.find((n) => n.featured) || demoNews[0];
  const otherNews = filteredNews.filter((n) => n.id !== featuredNews.id).slice(0, 4);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-100 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Newspaper className="w-8 h-8 text-gold-400" />
            <h2 className="text-3xl md:text-4xl font-black text-gold-gradient">
              МЭДЭЭ
            </h2>
          </div>
          <Link href="/news/" className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors">
            <span className="text-sm font-medium">Бүх мэдээ</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                : "bg-dark-100/50 text-gray-400 border border-gold-500/10 hover:text-gold-300"
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-1" />
            Бүгд
          </button>
          {newsCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                    : "bg-dark-100/50 text-gray-400 border border-gold-500/10 hover:text-gold-300"
                }`}
              >
                <Icon className={`w-4 h-4 inline mr-1 ${cat.color}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured News */}
          <Link href={`/news/`} className="group relative rounded-2xl overflow-hidden card-hover lg:row-span-2">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent z-10" />
              <div className="absolute inset-0 bg-dark-800 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
                  <Newspaper className="w-20 h-20 text-gold-500/20" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30">
                  Онцлох
                </span>
                <span className="px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-medium rounded-full border border-gold-500/30">
                  {newsCategories.find((c) => c.id === featuredNews.category)?.label}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                {featuredNews.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{featuredNews.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featuredNews.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {featuredNews.views.toLocaleString()}
                </span>
              </div>
            </div>
          </Link>

          {/* Other News Cards */}
          {otherNews.map((news) => (
            <Link key={news.id} href={`/news/`} className="group flex gap-4 p-4 rounded-xl bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 transition-all card-hover">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Newspaper className="w-8 h-8 text-gold-500/30" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-gold-500/10 text-gold-400 text-xs rounded-full border border-gold-500/20">
                    {newsCategories.find((c) => c.id === news.category)?.label}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-200 group-hover:text-gold-300 transition-colors line-clamp-2 mb-2">
                  {news.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {news.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {news.views.toLocaleString()}
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

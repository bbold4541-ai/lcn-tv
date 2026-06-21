"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { Newspaper, Landmark, Coins, Plane, Palette, GraduationCap, Globe, Cpu, Clock, Eye, ChevronRight, Filter } from "lucide-react";

const newsCategories = [
  { id: "all", label: "Бүгд", icon: Filter },
  { id: "politics", label: "Улс төр", icon: Landmark },
  { id: "economy", label: "Эдийн засаг", icon: Coins },
  { id: "tourism", label: "Аялал", icon: Plane },
  { id: "culture", label: "Соёл", icon: Palette },
  { id: "education", label: "Боловсрол", icon: GraduationCap },
  { id: "international", label: "Олон улс", icon: Globe },
  { id: "technology", label: "Технологи", icon: Cpu },
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
  {
    id: 7,
    category: "education",
    title: "Монголын их дээд сургуулиуд дэлхийн жишигт хүрэхээр зорьж байна",
    excerpt: "Монгол Улсын их дээд сургуулиуд олон улсын хөтөлбөр, хамтын ажиллагааг өргөжүүлж, дэлхийн жишигт хүрэхээр ажиллаж байна...",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    date: "2026-06-15",
    views: 6780,
    featured: false,
  },
  {
    id: 8,
    category: "politics",
    title: "Монгол Улс шинэ парламентын сонгууль зохион байгуулна",
    excerpt: "Монгол Улс 2026 онд шинэ парламентын сонгууль зохион байгуулах хуваарь гаргасан. Сонгуулийн шинэчлэлийн талаар...",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=500&fit=crop",
    date: "2026-06-14",
    views: 13400,
    featured: false,
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews = activeCategory === "all" 
    ? demoNews 
    : demoNews.filter((news) => news.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-8 h-8 text-gold-400" />
            <h1 className="text-3xl md:text-4xl font-black text-gold-gradient">
              МЭДЭЭ
            </h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {newsCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                      : "bg-dark-100/50 text-gray-400 border border-gold-500/10 hover:text-gold-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <div key={news.id} className="group relative rounded-2xl overflow-hidden card-hover bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30">
                {/* Image */}
                <div className="aspect-video relative bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center overflow-hidden">
                  <Newspaper className="w-12 h-12 text-gold-500/20" />
                  {news.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30">
                        Онцлох
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-gold-500/10 text-gold-400 text-xs rounded-full border border-gold-500/20">
                      {newsCategories.find((c) => c.id === news.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-200 group-hover:text-gold-300 transition-colors line-clamp-2 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
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
                    <button className="flex items-center gap-1 text-gold-400 text-sm hover:text-gold-300 transition-colors">
                      <span>Дэлгэрэнгүй</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
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

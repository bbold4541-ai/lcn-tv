"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { 
  Shield, Users, Newspaper, Video, Radio, Calendar, Settings, BarChart3, 
  LogIn, LogOut, Plus, Edit, Trash2, Eye, CheckCircle, XCircle, AlertTriangle,
  ChevronRight, Search, Filter, Upload, Clock, Globe, TrendingUp
} from "lucide-react";

const adminTabs = [
  { id: "dashboard", label: "Хяналтын самбар", icon: BarChart3 },
  { id: "news", label: "Мэдээ", icon: Newspaper },
  { id: "videos", label: "Видео", icon: Video },
  { id: "live", label: "Шууд", icon: Radio },
  { id: "programs", label: "Хөтөлбөр", icon: Calendar },
  { id: "users", label: "Хэрэглэгчид", icon: Users },
  { id: "settings", label: "Тохиргоо", icon: Settings },
];

const stats = [
  { label: "Нийт мэдээ", value: 1248, change: "+12", icon: Newspaper, color: "text-blue-400" },
  { label: "Нийт видео", value: 567, change: "+8", icon: Video, color: "text-purple-400" },
  { label: "Шууд үзэгчид", value: 2340, change: "+45", icon: Radio, color: "text-red-400" },
  { label: "Бүртгэлтэй хэрэглэгчид", value: 45600, change: "+234", icon: Users, color: "text-green-400" },
];

const demoNews = [
  { id: 1, title: "Монгол Улс олон улсын тайван байдлын өдрийг тэмдэглэж байна", category: "Улс төр", status: "published", date: "2026-06-21", views: 12450 },
  { id: 2, title: "Монголын эдийн засаг 2026 онд 5.8% өсөх төлөвтэй байна", category: "Эдийн засаг", status: "published", date: "2026-06-20", views: 8930 },
  { id: 3, title: "Говийн бүсэд шинэ экотуризмын төсөл эхэллээ", category: "Аялал", status: "draft", date: "2026-06-19", views: 0 },
  { id: 4, title: "Наадам 2026: Үндэсний их баяр наадмын бэлтгэл эхэллээ", category: "Соёл", status: "published", date: "2026-06-18", views: 15200 },
];

const demoVideos = [
  { id: 1, title: "Монголын гайхамшигт байгалийн үзэмж", category: "Баримтат", status: "published", duration: "12:34", views: 45600 },
  { id: 2, title: "Улаанбаатар хотын шөнийн амьдрал", category: "Соёл", status: "published", duration: "08:45", views: 12300 },
  { id: 3, title: "Монголын уламжлалт хоолны нууц", category: "Хоол", status: "processing", duration: "15:20", views: 0 },
];

const liveStatus = {
  isLive: true,
  currentProgram: "Монголын мэдээ - Шууд дамжуулалт",
  viewers: 2340,
  quality: "1080p HD",
  streamUrl: "https://youtube.com/live/...",
  aiSubtitle: true,
};

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [adminLevel, setAdminLevel] = useState<1 | 2>(1);

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="w-full max-w-md p-8 glass rounded-2xl border border-gold-500/20">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h1 className="text-2xl font-black text-gold-gradient mb-2">LCN TV Админ</h1>
            <p className="text-gray-400 text-sm">Админ хэсэгт нэвтрэх</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Хэрэглэгчийн нэр</label>
              <input
                type="text"
                placeholder="admin"
                className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Нууц үг</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Админ түвшин</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setAdminLevel(1)}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                    adminLevel === 1
                      ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                      : "bg-dark-100/50 text-gray-400 border border-gold-500/10"
                  }`}
                >
                  Admin 1
                  <span className="block text-xs mt-1 opacity-70">Мобайл дэмжлэгтэй</span>
                </button>
                <button
                  onClick={() => setAdminLevel(2)}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                    adminLevel === 2
                      ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                      : "bg-dark-100/50 text-gray-400 border border-gold-500/10"
                  }`}
                >
                  Admin 2
                  <span className="block text-xs mt-1 opacity-70">Бүрэн эрх</span>
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full py-3 bg-gold-500/20 border border-gold-500/30 text-gold-400 rounded-xl font-bold hover:bg-gold-500/30 transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              Нэвтрэх
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Admin Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-gold-400" />
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-gold-gradient">
                  АДМИН
                </h1>
                <span className="text-gold-400/80 text-sm">Admin {adminLevel}</span>
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500/20 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Гарах</span>
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {adminTabs.map((tab) => {
              const Icon = tab.icon;
              // Admin 1 can only access: dashboard, news, videos, live, programs
              if (adminLevel === 1 && !["dashboard", "news", "videos", "live", "programs"].includes(tab.id)) {
                return null;
              }
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                      : "bg-dark-100/50 text-gray-400 border border-gold-500/10 hover:text-gold-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="glass rounded-2xl p-6 border border-gold-500/20">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                        <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-white">{stat.value.toLocaleString()}</div>
                      <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6 border border-gold-500/20">
                  <h3 className="text-white font-bold mb-4">Сүүлийн 7 хоногийн үзэгчид</h3>
                  <div className="flex items-end gap-2 h-32">
                    {[65, 78, 52, 89, 95, 72, 88].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-gold-500/30 rounded-t-lg" style={{ height: `${height}%` }} />
                        <span className="text-gray-500 text-xs">{["Да", "Мя", "Лха", "Пү", "Ба", "Бя", "Ня"][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 border border-gold-500/20">
                  <h3 className="text-white font-bold mb-4">Системийн статус</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Шууд дамжуулалт</span>
                      <span className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" /> Идэвхтэй
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">AI хадмал</span>
                      <span className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" /> Ажиллаж байна
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Сервер</span>
                      <span className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" /> Онлайн
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Мэдээлэл синхрон</span>
                      <span className="flex items-center gap-1 text-yellow-400 text-sm">
                        <AlertTriangle className="w-4 h-4" /> Шалгаж байна
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Management */}
          {activeTab === "news" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Мэдээний удирдлага</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/30 transition-all">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Шинэ мэдээ</span>
                </button>
              </div>

              <div className="glass rounded-2xl border border-gold-500/20 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gold-500/20">
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Гарчиг</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Ангилал</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Статус</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Огноо</th>
                      <th className="text-right py-3 px-4 text-gray-400 text-sm font-medium">Үзсэн</th>
                      <th className="text-right py-3 px-4 text-gray-400 text-sm font-medium">Үйлдэл</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoNews.map((news) => (
                      <tr key={news.id} className="border-b border-gold-500/10 hover:bg-gold-500/5 transition-colors">
                        <td className="py-4 px-4">
                          <span className="text-white text-sm">{news.title}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 bg-gold-500/10 text-gold-400 text-xs rounded-full border border-gold-500/20">
                            {news.category}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full border ${
                            news.status === "published" 
                              ? "bg-green-500/10 text-green-400 border-green-500/20" 
                              : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                          }`}>
                            {news.status === "published" ? "Нийтлэгдсэн" : "Ноорог"}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-400 text-sm">{news.date}</td>
                        <td className="py-4 px-4 text-right text-gray-400 text-sm">{news.views.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-all">
                              <Edit className="w-4 h-4 text-gold-400" />
                            </button>
                            <button className="p-2 hover:bg-red-500/10 rounded-lg transition-all">
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Videos Management */}
          {activeTab === "videos" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Видео удирдлага</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/30 transition-all">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Видео оруулах</span>
                </button>
              </div>

              <div className="glass rounded-2xl border border-gold-500/20 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gold-500/20">
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Гарчиг</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Ангилал</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Статус</th>
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Хугацаа</th>
                      <th className="text-right py-3 px-4 text-gray-400 text-sm font-medium">Үзсэн</th>
                      <th className="text-right py-3 px-4 text-gray-400 text-sm font-medium">Үйлдэл</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demoVideos.map((video) => (
                      <tr key={video.id} className="border-b border-gold-500/10 hover:bg-gold-500/5 transition-colors">
                        <td className="py-4 px-4">
                          <span className="text-white text-sm">{video.title}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 bg-gold-500/10 text-gold-400 text-xs rounded-full border border-gold-500/20">
                            {video.category}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full border ${
                            video.status === "published" 
                              ? "bg-green-500/10 text-green-400 border-green-500/20" 
                              : video.status === "processing"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                              : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                          }`}>
                            {video.status === "published" ? "Нийтлэгдсэн" : video.status === "processing" ? "Боловсруулж байна" : "Ноорог"}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-400 text-sm">{video.duration}</td>
                        <td className="py-4 px-4 text-right text-gray-400 text-sm">{video.views.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-all">
                              <Edit className="w-4 h-4 text-gold-400" />
                            </button>
                            <button className="p-2 hover:bg-red-500/10 rounded-lg transition-all">
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Live Management */}
          {activeTab === "live" && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Шууд дамжуулалтын удирдлага</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6 border border-gold-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold">Статус</h3>
                    <span className={`px-3 py-1 text-sm font-bold rounded-full border ${
                      liveStatus.isLive 
                        ? "bg-red-500/20 text-red-400 border-red-500/30 animate-pulse" 
                        : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                    }`}>
                      {liveStatus.isLive ? "LIVE" : "OFFLINE"}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Одоогийн хөтөлбөр</span>
                      <span className="text-white text-sm">{liveStatus.currentProgram}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Үзэгчид</span>
                      <span className="text-gold-400 text-sm font-bold">{liveStatus.viewers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Чанар</span>
                      <span className="text-white text-sm">{liveStatus.quality}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">AI хадмал</span>
                      <span className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" /> Идэвхтэй
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 py-3 bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl font-bold hover:bg-red-500/30 transition-all">
                      Зогсоох
                    </button>
                    <button className="flex-1 py-3 bg-gold-500/20 border border-gold-500/30 text-gold-400 rounded-xl font-bold hover:bg-gold-500/30 transition-all">
                      Шинэчлэх
                    </button>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 border border-gold-500/20">
                  <h3 className="text-white font-bold mb-4">Stream тохиргоо</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Stream URL</label>
                      <input
                        type="text"
                        value={liveStatus.streamUrl}
                        readOnly
                        className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Хөтлөгч</label>
                      <input
                        type="text"
                        placeholder="Хөтлөгчийн нэр"
                        className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={liveStatus.aiSubtitle} className="w-4 h-4 accent-gold-400" />
                      <span className="text-gray-300 text-sm">AI хадмал идэвхжүүлэх</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Programs Management */}
          {activeTab === "programs" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Хөтөлбөрийн удирдлага</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/30 transition-all">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Шинэ хөтөлбөр</span>
                </button>
              </div>

              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <h3 className="text-white font-bold mb-4">Өнөөдрийн хуваарь</h3>
                <div className="space-y-3">
                  {[
                    { time: "06:00", title: "Өглөөний мэдээ", duration: "30 мин", status: "done" },
                    { time: "08:00", title: "Хүүхдийн хөтөлбөр", duration: "60 мин", status: "done" },
                    { time: "12:15", title: "Үдийн мэдээ", duration: "30 мин", status: "current" },
                    { time: "18:00", title: "Монголын мэдээ - Шууд", duration: "60 мин", status: "upcoming" },
                    { time: "20:15", title: "Соёлын хөтөч", duration: "60 мин", status: "upcoming" },
                  ].map((program, index) => (
                    <div key={index} className={`flex items-center gap-4 p-4 rounded-xl ${
                      program.status === "current" 
                        ? "bg-gold-500/10 border border-gold-500/30" 
                        : "bg-dark-100/50 border border-gold-500/10"
                    }`}>
                      <div className="w-16 text-center">
                        <span className="text-gold-400 font-bold text-sm">{program.time}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{program.title}</h4>
                        <span className="text-gray-400 text-sm">{program.duration}</span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full border ${
                        program.status === "done" 
                          ? "bg-green-500/10 text-green-400 border-green-500/20" 
                          : program.status === "current"
                          ? "bg-gold-500/10 text-gold-400 border-gold-500/20"
                          : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                      }`}>
                        {program.status === "done" ? "Дууссан" : program.status === "current" ? "Одоо" : "Удахгүй"}
                      </span>
                      <button className="p-2 hover:bg-gold-500/10 rounded-lg transition-all">
                        <Edit className="w-4 h-4 text-gold-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Users Management (Admin 2 only) */}
          {activeTab === "users" && adminLevel === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Хэрэглэгчидийн удирдлага</h2>
              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Хэрэглэгч хайх..."
                      className="bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                    />
                  </div>
                  <span className="text-gray-400 text-sm">Нийт: 45,600</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Б. Бат-Эрдэнэ", email: "bat@example.com", role: "Editor", status: "active" },
                    { name: "Г. Ганболд", email: "ganbold@example.com", role: "Viewer", status: "active" },
                    { name: "Д. Дорж", email: "dorj@example.com", role: "Admin", status: "active" },
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-dark-100/50 border border-gold-500/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-bold">
                          {user.name[0]}
                        </div>
                        <div>
                          <div className="text-white font-medium">{user.name}</div>
                          <div className="text-gray-400 text-sm">{user.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-1 bg-gold-500/10 text-gold-400 text-xs rounded-full border border-gold-500/20">
                          {user.role}
                        </span>
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                          {user.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings (Admin 2 only) */}
          {activeTab === "settings" && adminLevel === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Системийн тохиргоо</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6 border border-gold-500/20">
                  <h3 className="text-white font-bold mb-4">Ерөнхий тохиргоо</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Сайтын нэр</label>
                      <input
                        type="text"
                        defaultValue="LCN TV"
                        className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Хэлээс хамаарсан мессеж</label>
                      <textarea
                        defaultValue="Монголыг дэлхийтэй холбоно"
                        rows={3}
                        className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 border border-gold-500/20">
                  <h3 className="text-white font-bold mb-4">Stream тохиргоо</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">YouTube Stream Key</label>
                      <input
                        type="password"
                        defaultValue="••••••••••••••••"
                        className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">AI API Key</label>
                      <input
                        type="password"
                        defaultValue="••••••••••••••••"
                        className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-gold-400" />
                      <span className="text-gray-300 text-sm">Автомат хадмал идэвхжүүлэх</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BottomNav />
      <LCN_AI />
    </div>
  );
}

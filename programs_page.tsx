"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { Calendar, Clock, Star, ChevronRight, Sun, Moon, Tv } from "lucide-react";

const daysOfWeek = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"];

const todaySchedule = [
  { time: "06:00", title: "Өглөөний мэдээ", type: "news", duration: "30 мин" },
  { time: "06:30", title: "Өглөөний хөтөч", type: "morning", duration: "90 мин" },
  { time: "08:00", title: "Хүүхдийн хөтөлбөр", type: "kids", duration: "60 мин" },
  { time: "09:00", title: "Баримтат кино", type: "documentary", duration: "60 мин" },
  { time: "10:00", title: "Соёлын хөтөч", type: "culture", duration: "45 мин" },
  { time: "10:45", title: "Спортын мэдээ", type: "sport", duration: "30 мин" },
  { time: "11:15", title: "Аялалын хөтөвч", type: "travel", duration: "60 мин" },
  { time: "12:15", title: "Үдийн мэдээ", type: "news", duration: "30 мин" },
  { time: "12:45", title: "Кино", type: "movie", duration: "120 мин" },
  { time: "15:00", title: "Эдийн засгийн тойм", type: "economy", duration: "45 мин" },
  { time: "15:45", title: "Технологийн тойм", type: "tech", duration: "30 мин" },
  { time: "16:15", title: "Хүүхдийн хөтөлбөр", type: "kids", duration: "45 мин" },
  { time: "17:00", title: "Олон улсын мэдээ", type: "news", duration: "30 мин" },
  { time: "17:30", title: "Спортын тойм", type: "sport", duration: "30 мин" },
  { time: "18:00", title: "Монголын мэдээ - Шууд", type: "live", duration: "60 мин" },
  { time: "19:00", title: "Эдийн засгийн тойм", type: "economy", duration: "45 мин" },
  { time: "19:45", title: "Спортын мэдээ", type: "sport", duration: "30 мин" },
  { time: "20:15", title: "Соёлын хөтөч", type: "culture", duration: "60 мин" },
  { time: "21:15", title: "Олон улсын тойм", type: "news", duration: "45 мин" },
  { time: "22:00", title: "Кино", type: "movie", duration: "120 мин" },
];

const featuredPrograms = [
  { id: 1, title: "Монголын мэдээ", description: "Монгол Улсын болон олон улсын хамгийн сүүлийн үеийн мэдээлэл", time: "18:00", days: "Өдөр бүр", featured: true },
  { id: 2, title: "Соёлын хөтөч", description: "Монголын соёл, түүх, уламжлалын талаарх нэвтрүүлэг", time: "20:15", days: "Даваа-Баасан", featured: true },
  { id: 3, title: "Аялалын хөтөвч", description: "Монголын гайхамшигт газруудыг танилцуулсан аялалын нэвтрүүлэг", time: "11:15", days: "Бямба, Ням", featured: false },
  { id: 4, title: "Спортын тойм", description: "Олон улс болон дотоодын спортын мэдээ, тойм", time: "17:30", days: "Өдөр бүр", featured: false },
];

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<"today" | "weekly" | "featured">("today");
  const [selectedDay, setSelectedDay] = useState(0);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "news": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "live": return "bg-red-500/10 text-red-400 border-red-500/20";
      case "sport": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "culture": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "movie": return "bg-pink-500/10 text-pink-400 border-pink-500/20";
      case "documentary": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      default: return "bg-gold-500/10 text-gold-400 border-gold-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-gold-400" />
            <h1 className="text-3xl md:text-4xl font-black text-gold-gradient">
              ХӨТӨЛБӨР
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8">
            {[
              { id: "today", label: "Өнөөдөр", icon: Sun },
              { id: "weekly", label: "Долоо хоног", icon: Calendar },
              { id: "featured", label: "Онцлох", icon: Star },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
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

          {/* Today Schedule */}
          {activeTab === "today" && (
            <div className="space-y-3">
              {todaySchedule.map((program, index) => (
                <div key={index} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  program.type === "live" 
                    ? "bg-red-500/5 border border-red-500/20" 
                    : "bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30"
                }`}>
                  <div className="w-16 text-center">
                    <span className="text-gold-400 font-bold text-sm">{program.time}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold">{program.title}</h3>
                      {program.type === "live" && (
                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30 animate-pulse">
                          LIVE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-xs rounded-full border ${getTypeColor(program.type)}`}>
                        {program.duration}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </div>
              ))}
            </div>
          )}

          {/* Weekly Schedule */}
          {activeTab === "weekly" && (
            <div className="space-y-6">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {daysOfWeek.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDay(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      selectedDay === index
                        ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                        : "bg-dark-100/50 text-gray-400 border border-gold-500/10 hover:text-gold-300"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {todaySchedule.slice(0, 8).map((program, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 transition-all">
                    <div className="w-16 text-center">
                      <span className="text-gold-400 font-bold text-sm">{program.time}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold">{program.title}</h3>
                      <span className={`px-2 py-0.5 text-xs rounded-full border ${getTypeColor(program.type)}`}>
                        {program.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Featured Programs */}
          {activeTab === "featured" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPrograms.map((program) => (
                <div key={program.id} className="group relative rounded-2xl overflow-hidden card-hover bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 p-6">
                  <div className="flex items-center justify-between mb-4">
                    {program.featured && (
                      <span className="px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-bold rounded-full border border-gold-500/30">
                        Онцлох
                      </span>
                    )}
                    <span className="px-3 py-1 bg-dark-200/50 text-gray-400 text-xs rounded-full border border-gold-500/10">
                      {program.days}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{program.description}</p>
                  <div className="flex items-center gap-2 text-gold-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{program.time}</span>
                  </div>
                </div>
              ))}
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

"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { Radio, Circle, Clock, Calendar, Subtitles, Mic, ChevronRight, Play, Volume2, Settings } from "lucide-react";

const currentProgram = {
  title: "Монголын мэдээ - Шууд дамжуулалт",
  description: "Монгол Улсын болон олон улсын хамгийн сүүлийн үеийн мэдээлэл",
  startTime: "18:00",
  endTime: "19:00",
  host: "Б. Бат-Эрдэнэ",
};

const upcomingPrograms = [
  { time: "19:00", title: "Эдийн засгийн тойм", duration: "45 мин" },
  { time: "19:45", title: "Спортын мэдээ", duration: "30 мин" },
  { time: "20:15", title: "Соёлын хөтөч", duration: "60 мин" },
  { time: "21:15", title: "Олон улсын тойм", duration: "45 мин" },
];

export default function LivePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [aiSubtitle, setAiSubtitle] = useState(true);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="relative">
              <Radio className="w-8 h-8 text-gold-400" />
              <Circle className="w-3 h-3 text-red-500 fill-red-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gold-gradient">
              ШУУД ДАМЖУУЛАЛТ
            </h1>
            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-bold rounded-full border border-red-500/30 live-indicator">
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Player */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="relative rounded-2xl overflow-hidden bg-dark-100 border border-gold-500/20 aspect-video">
                {/* YouTube Embed Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-gold-500/30 transition-all" onClick={() => setIsPlaying(!isPlaying)}>
                      <Play className="w-10 h-10 text-gold-400 fill-gold-400 ml-1" />
                    </div>
                    <p className="text-gold-400 font-medium">Шууд эхлүүлэх</p>
                    <p className="text-gray-500 text-sm mt-1">YouTube Live Embed</p>
                  </div>
                </div>

                {/* Player Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 to-transparent p-4">
                  <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full bg-gold-500/20 hover:bg-gold-500/30 transition-all">
                      <Play className="w-5 h-5 text-gold-400 fill-gold-400" />
                    </button>
                    <div className="flex-1">
                      <div className="h-1 bg-gold-500/20 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-gold-400 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-gray-400" />
                      <div className="w-20 h-1 bg-gold-500/20 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gold-400 rounded-full" />
                      </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-gold-500/10 transition-all">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Current Program Info */}
              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Circle className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
                    <span className="text-red-400 font-bold text-sm">ОДОО ДАМЖУУЛЖ БАЙНА</span>
                  </div>
                  <span className="text-gray-500 text-sm">{currentProgram.startTime} - {currentProgram.endTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{currentProgram.title}</h2>
                <p className="text-gray-400 mb-4">{currentProgram.description}</p>
                <div className="flex items-center gap-2 text-sm text-gold-400">
                  <Mic className="w-4 h-4" />
                  <span>Хөтлөгч: {currentProgram.host}</span>
                </div>
              </div>

              {/* Subtitle Status */}
              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Subtitles className="w-6 h-6 text-gold-400" />
                    <div>
                      <h3 className="text-white font-bold">Хадмал бэлэн</h3>
                      <p className="text-gray-400 text-sm">AI хадмал орчуулга идэвхтэй</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setShowSubtitle(!showSubtitle)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        showSubtitle
                          ? "bg-gold-500/20 text-gold-400 border border-gold-500/30"
                          : "bg-dark-100 text-gray-400 border border-gold-500/10"
                      }`}
                    >
                      Хадмал
                    </button>
                    <button
                      onClick={() => setAiSubtitle(!aiSubtitle)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        aiSubtitle
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-dark-100 text-gray-400 border border-gold-500/10"
                      }`}
                    >
                      AI Хадмал
                    </button>
                  </div>
                </div>
                {aiSubtitle && (
                  <div className="mt-4 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Circle className="w-2 h-2 text-green-400 fill-green-400 animate-pulse" />
                      <span className="text-green-400 text-sm font-medium">AI хадмал ажиллаж байна</span>
                    </div>
                    <p className="text-gray-400 text-sm italic">
                      "Монгол Улсын олон улсын тайван байдлын өдрийн мэндчилгээ..."
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Upcoming Programs */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-gold-400" />
                  <h3 className="text-lg font-bold text-white">Удахгүй</h3>
                </div>

                <div className="space-y-4">
                  {upcomingPrograms.map((program, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-xl bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 transition-all cursor-pointer">
                      <div className="flex flex-col items-center">
                        <Clock className="w-4 h-4 text-gold-400 mb-1" />
                        <span className="text-gold-400 font-bold text-sm">{program.time}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm mb-1">{program.title}</h4>
                        <span className="text-gray-500 text-xs">{program.duration}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Stats */}
              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <h3 className="text-lg font-bold text-white mb-4">Шууд дамжуулалтын статус</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Статус</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Идэвхтэй</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Чанар</span>
                    <span className="text-gold-400 text-sm font-medium">1080p HD</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Хадмал</span>
                    <span className="text-green-400 text-sm font-medium">Бэлэн</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">AI хадмал</span>
                    <span className="text-green-400 text-sm font-medium">Идэвхтэй</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
      <LCN_AI />
    </div>
  );
}

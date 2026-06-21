"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { CloudSun, Sun, Cloud, CloudRain, Snowflake, Wind, Droplets, Eye, Thermometer, Sunrise, Sunset, MapPin, ChevronRight } from "lucide-react";

const cities = [
  { id: "ulaanbaatar", name: "Улаанбаатар", temp: 18, condition: "Багавтар үүлтэй", high: 24, low: 12, humidity: 45, wind: 12, visibility: 10, pressure: 1013, uv: 6, sunrise: "05:45", sunset: "20:30" },
  { id: "erdenet", name: "Эрдэнэт", temp: 16, condition: "Үүлшинэ", high: 22, low: 10, humidity: 50, wind: 15, visibility: 8, pressure: 1010, uv: 5, sunrise: "05:50", sunset: "20:25" },
  { id: "darkhan", name: "Дархан", temp: 19, condition: "Нарын шуурга", high: 25, low: 13, humidity: 40, wind: 10, visibility: 10, pressure: 1015, uv: 7, sunrise: "05:48", sunset: "20:28" },
  { id: "choibalsan", name: "Чойбалсан", temp: 20, condition: "Тодорхой", high: 26, low: 14, humidity: 35, wind: 8, visibility: 10, pressure: 1018, uv: 8, sunrise: "05:30", sunset: "20:40" },
  { id: "khovd", name: "Ховд", temp: 22, condition: "Тодорхой", high: 28, low: 15, humidity: 30, wind: 6, visibility: 10, pressure: 1020, uv: 9, sunrise: "05:20", sunset: "20:50" },
  { id: "altai", name: "Говь-Алтай", temp: 21, condition: "Багавтар үүлтэй", high: 27, low: 14, humidity: 32, wind: 9, visibility: 10, pressure: 1017, uv: 8, sunrise: "05:25", sunset: "20:45" },
];

const forecast = [
  { day: "Даваа", icon: "sun", high: 24, low: 12, condition: "Тодорхой" },
  { day: "Мягмар", icon: "cloud", high: 22, low: 11, condition: "Үүлшинэ" },
  { day: "Лхагва", icon: "rain", high: 20, low: 10, condition: "Бороо" },
  { day: "Пүрэв", icon: "cloud-sun", high: 23, low: 12, condition: "Багавтар үүлтэй" },
  { day: "Баасан", icon: "sun", high: 25, low: 13, condition: "Тодорхой" },
  { day: "Бямба", icon: "sun", high: 26, low: 14, condition: "Нарын шуурга" },
  { day: "Ням", icon: "cloud", high: 21, low: 11, condition: "Үүлшинэ" },
];

const hourlyForecast = [
  { time: "Одоо", temp: 18, icon: "cloud-sun" },
  { time: "13:00", temp: 20, icon: "sun" },
  { time: "14:00", temp: 22, icon: "sun" },
  { time: "15:00", temp: 23, icon: "sun" },
  { time: "16:00", temp: 22, icon: "cloud-sun" },
  { time: "17:00", temp: 21, icon: "cloud" },
  { time: "18:00", temp: 19, icon: "cloud" },
  { time: "19:00", temp: 17, icon: "cloud" },
  { time: "20:00", temp: 15, icon: "cloud" },
  { time: "21:00", temp: 14, icon: "cloud" },
  { time: "22:00", temp: 13, icon: "cloud" },
  { time: "23:00", temp: 12, icon: "cloud" },
];

function WeatherIcon({ type, className = "w-6 h-6" }: { type: string; className?: string }) {
  switch (type) {
    case "sun": return <Sun className={`${className} text-yellow-400`} />;
    case "cloud": return <Cloud className={`${className} text-gray-400`} />;
    case "rain": return <CloudRain className={`${className} text-blue-400`} />;
    case "snow": return <Snowflake className={`${className} text-cyan-400`} />;
    case "cloud-sun": return <CloudSun className={`${className} text-gold-400`} />;
    default: return <Sun className={`${className} text-yellow-400`} />;
  }
}

export default function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <CloudSun className="w-8 h-8 text-gold-400" />
            <h1 className="text-3xl md:text-4xl font-black text-gold-gradient">
              ЦАГ АГААР
            </h1>
          </div>

          {/* City Selector */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCity.id === city.id
                    ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                    : "bg-dark-100/50 text-gray-400 border border-gold-500/10 hover:text-gold-300"
                }`}
              >
                <MapPin className="w-4 h-4" />
                {city.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Weather Card */}
            <div className="lg:col-span-2 glass rounded-2xl p-8 border border-gold-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <h2 className="text-2xl font-bold text-white">{selectedCity.name}</h2>
                </div>
                <span className="text-gray-400 text-sm">2026-06-21</span>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                  <WeatherIcon type="cloud-sun" className="w-20 h-20" />
                  <div>
                    <div className="text-6xl md:text-7xl font-black text-white">{selectedCity.temp}°</div>
                    <div className="text-gold-400 text-lg mt-1">{selectedCity.condition}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-sm">Өндөр</div>
                  <div className="text-white font-bold text-xl">{selectedCity.high}°</div>
                  <div className="text-gray-400 text-sm mt-2">Бага</div>
                  <div className="text-white font-bold text-xl">{selectedCity.low}°</div>
                </div>
              </div>

              {/* Hourly Forecast */}
              <div className="border-t border-gold-500/10 pt-6">
                <h3 className="text-white font-bold mb-4">Цагийн төлөв</h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {hourlyForecast.map((hour, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 min-w-[60px] p-3 rounded-xl bg-dark-100/50 border border-gold-500/10">
                      <span className="text-gray-400 text-xs">{hour.time}</span>
                      <WeatherIcon type={hour.icon} className="w-6 h-6" />
                      <span className="text-white font-bold text-sm">{hour.temp}°</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weather Details */}
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <h3 className="text-white font-bold mb-4">Дэлгэрэнгүй</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-400 text-sm">Чийгшил</span>
                    </div>
                    <span className="text-white font-medium">{selectedCity.humidity}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-400 text-sm">Салхи</span>
                    </div>
                    <span className="text-white font-medium">{selectedCity.wind} км/ц</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">Харагдахуй</span>
                    </div>
                    <span className="text-white font-medium">{selectedCity.visibility} км</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-red-400" />
                      <span className="text-gray-400 text-sm">Даралт</span>
                    </div>
                    <span className="text-white font-medium">{selectedCity.pressure} hPa</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <h3 className="text-white font-bold mb-4">Нар</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sunrise className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-400 text-sm">Мандах</span>
                    </div>
                    <span className="text-white font-medium">{selectedCity.sunrise}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sunset className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-400 text-sm">Жаргах</span>
                    </div>
                    <span className="text-white font-medium">{selectedCity.sunset}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7 Day Forecast */}
          <div className="mt-8 glass rounded-2xl p-6 border border-gold-500/20">
            <h3 className="text-white font-bold mb-6">7 хоногийн төлөв</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {forecast.map((day, index) => (
                <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 transition-all">
                  <span className="text-gold-400 font-bold text-sm">{day.day}</span>
                  <WeatherIcon type={day.icon} className="w-8 h-8" />
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">{day.high}°</span>
                    <span className="text-gray-500 text-sm">{day.low}°</span>
                  </div>
                  <span className="text-gray-400 text-xs text-center">{day.condition}</span>
                </div>
              ))}
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

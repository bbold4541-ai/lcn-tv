"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { Banknote, TrendingUp, TrendingDown, Minus, ArrowRightLeft, Calculator, Clock, Globe } from "lucide-react";

const currencies = [
  { code: "USD", name: "Америк доллар", flag: "🇺🇸", rate: 3450.50, change: 0.15, trend: "up" },
  { code: "EUR", name: "Евро", flag: "🇪🇺", rate: 3720.75, change: -0.25, trend: "down" },
  { code: "CNY", name: "Хятад юань", flag: "🇨🇳", rate: 478.20, change: 0.08, trend: "up" },
  { code: "RUB", name: "Орос рубль", flag: "🇷🇺", rate: 38.50, change: -0.45, trend: "down" },
  { code: "JPY", name: "Япон иен", flag: "🇯🇵", rate: 23.15, change: 0.05, trend: "up" },
  { code: "KRW", name: "Солонгос вон", flag: "🇰🇷", rate: 2.58, change: 0.02, trend: "up" },
  { code: "GBP", name: "Британи фунт", flag: "🇬🇧", rate: 4380.00, change: -0.10, trend: "down" },
  { code: "CHF", name: "Швейцар франк", flag: "🇨🇭", rate: 3850.25, change: 0.20, trend: "up" },
  { code: "AUD", name: "Австрали доллар", flag: "🇦🇺", rate: 2280.60, change: -0.15, trend: "down" },
  { code: "CAD", name: "Канад доллар", flag: "🇨🇦", rate: 2520.30, change: 0.12, trend: "up" },
  { code: "SGD", name: "Сингапур доллар", flag: "🇸🇬", rate: 2560.80, change: 0.18, trend: "up" },
  { code: "THB", name: "Тай бат", flag: "🇹🇭", rate: 96.50, change: -0.05, trend: "down" },
];

const history = [
  { date: "2026-06-14", usd: 3445.00, eur: 3730.00, cny: 477.00 },
  { date: "2026-06-15", usd: 3448.50, eur: 3728.00, cny: 477.50 },
  { date: "2026-06-16", usd: 3446.00, eur: 3725.00, cny: 478.00 },
  { date: "2026-06-17", usd: 3449.00, eur: 3722.00, cny: 477.80 },
  { date: "2026-06-18", usd: 3451.00, eur: 3718.00, cny: 478.20 },
  { date: "2026-06-19", usd: 3449.50, eur: 3721.00, cny: 478.00 },
  { date: "2026-06-20", usd: 3450.00, eur: 3720.00, cny: 478.10 },
  { date: "2026-06-21", usd: 3450.50, eur: 3720.75, cny: 478.20 },
];

export default function CurrencyPage() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("MNT");

  const convertCurrency = (amt: number, from: string, to: string) => {
    if (from === to) return amt;
    const fromRate = from === "MNT" ? 1 : currencies.find((c) => c.code === from)?.rate || 1;
    const toRate = to === "MNT" ? 1 : currencies.find((c) => c.code === to)?.rate || 1;
    return (amt * fromRate) / toRate;
  };

  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <Banknote className="w-8 h-8 text-gold-400" />
            <h1 className="text-3xl md:text-4xl font-black text-gold-gradient">
              ВАЛЮТЫН ХАНШ
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Rates Table */}
            <div className="lg:col-span-2 glass rounded-2xl p-6 border border-gold-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gold-400" />
                  <h2 className="text-xl font-bold text-white">Ханшын жагсаалт</h2>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Шинэчлэгдсэн: 2026-06-21 10:00</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gold-500/20">
                      <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Валют</th>
                      <th className="text-right py-3 px-4 text-gray-400 text-sm font-medium">Ханш (MNT)</th>
                      <th className="text-right py-3 px-4 text-gray-400 text-sm font-medium">Өөрчлөлт</th>
                      <th className="text-center py-3 px-4 text-gray-400 text-sm font-medium">Чиг хандлага</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencies.map((currency) => (
                      <tr key={currency.code} className="border-b border-gold-500/10 hover:bg-gold-500/5 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{currency.flag}</span>
                            <div>
                              <div className="text-white font-bold">{currency.code}</div>
                              <div className="text-gray-400 text-sm">{currency.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="text-white font-bold text-lg">{currency.rate.toLocaleString()}</span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className={`text-sm font-medium ${
                            currency.change > 0 ? "text-green-400" : currency.change < 0 ? "text-red-400" : "text-gray-400"
                          }`}>
                            {currency.change > 0 ? "+" : ""}{currency.change}%
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          {currency.trend === "up" ? (
                            <TrendingUp className="w-5 h-5 text-green-400 mx-auto" />
                          ) : currency.trend === "down" ? (
                            <TrendingDown className="w-5 h-5 text-red-400 mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Converter */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-5 h-5 text-gold-400" />
                  <h2 className="text-xl font-bold text-white">Хөрвүүлэгч</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Хэмжээ</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white text-lg font-bold focus:outline-none focus:border-gold-500/50"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <label className="text-gray-400 text-sm mb-2 block">Эх валют</label>
                      <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                      >
                        <option value="MNT">🇲🇳 MNT - Монгол төгрөг</option>
                        {currencies.map((c) => (
                          <option key={c.code} value={c.code}>{c.flag} {c.code} - {c.name}</option>
                        ))}
                      </select>
                    </div>
                    <ArrowRightLeft className="w-5 h-5 text-gold-400 mt-6" />
                    <div className="flex-1">
                      <label className="text-gray-400 text-sm mb-2 block">Орчих валют</label>
                      <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50"
                      >
                        <option value="MNT">🇲🇳 MNT - Монгол төгрөг</option>
                        {currencies.map((c) => (
                          <option key={c.code} value={c.code}>{c.flag} {c.code} - {c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                    <div className="text-gray-400 text-sm mb-1">Үр дүн</div>
                    <div className="text-2xl font-black text-gold-400">
                      {convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} {toCurrency}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass rounded-2xl p-6 border border-gold-500/20">
                <h3 className="text-white font-bold mb-4">Хурдан мэдээлэл</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Хамгийн их өсөлт</span>
                    <span className="text-green-400 font-medium">USD +0.15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Хамгийн их бууралт</span>
                    <span className="text-red-400 font-medium">RUB -0.45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Тогтвортой</span>
                    <span className="text-gold-400 font-medium">CNY +0.08%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* History Chart */}
          <div className="mt-8 glass rounded-2xl p-6 border border-gold-500/20">
            <h3 className="text-white font-bold mb-6">7 хоногийн ханшын түүх</h3>
            <div className="overflow-x-auto">
              <div className="flex items-end gap-4 h-48 min-w-[600px]">
                {history.map((day, index) => {
                  const maxUsd = 3730;
                  const minUsd = 3445;
                  const height = ((day.usd - minUsd) / (maxUsd - minUsd)) * 100;
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="text-gold-400 text-xs font-medium">{day.usd}</div>
                      <div className="w-full bg-gold-500/20 rounded-t-lg relative" style={{ height: `${height}%` }}>
                        <div className="absolute inset-0 bg-gold-500/40 rounded-t-lg" />
                      </div>
                      <div className="text-gray-400 text-xs">{day.date.slice(5)}</div>
                    </div>
                  );
                })}
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

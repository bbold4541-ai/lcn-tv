"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Radio, Video, Globe, Trophy } from "lucide-react";

const bottomNavItems = [
  { href: "/", label: "Нүүр", icon: Home },
  { href: "/live/", label: "Live", icon: Radio },
  { href: "/video/", label: "Видео", icon: Video },
  { href: "/language-center/", label: "Бөмбүүлэй", icon: Globe },
  { href: "/sport/", label: "LCN Sport", icon: Trophy },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark-500/95 backdrop-blur-xl border-t border-gold-500/20">
      <div className="flex items-center justify-around px-2 py-2">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                isActive
                  ? "text-gold-400"
                  : "text-gray-500 hover:text-gold-300"
              }`}
            >
              <div className={`p-2 rounded-xl ${isActive ? "bg-gold-500/20" : ""}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
              {item.label === "Live" && (
                <span className="absolute top-2 right-[calc(20%+8px)] w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
      {/* Safe area for iPhone */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}

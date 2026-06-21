"use client";

import { Heart } from "lucide-react";

const peaceMessages = [
  { flag: "🇲🇳", text: "Бидний эрхэм зүйл бол хүн та билээ." },
  { flag: "🇺🇸", text: "Our most precious value is you, human being." },
  { flag: "🇨🇳", text: "我们最珍贵的价值就是你，人类。" },
  { flag: "🇷🇺", text: "Наша самая драгоценная ценность — это вы, человек." },
  { flag: "🇰🇷", text: "우리가 가장 소중히 여기는 가치는 바로 당신, 인간입니다." },
  { flag: "🇯🇵", text: "私たちの最も尊い価値は、あなた、人間です。" },
  { flag: "🇫🇷", text: "Notre valeur la plus précieuse est vous, être humain." },
  { flag: "🇩🇪", text: "Unser wertvollster Schatz ist du, Mensch." },
  { flag: "🇪🇸", text: "Nuestro valor más precioso eres tú, ser humano." },
  { flag: "🇹🇷", text: "En değerli değerimiz sensin, insan." },
  { flag: "🇸🇦", text: "أغلى قيمتنا هي أنت، أيها الإنسان." },
  { flag: "🇮🇳", text: "हमारी सबसे कीमती संपत्ति आप हैं, मनुष्य।" },
  { flag: "🇻🇳", text: "Giá trị quý giá nhất của chúng tôi là bạn, con người." },
  { flag: "🇹🇭", text: "สิ่งที่มีค่าที่สุดของเราคือคุณ มนุษย์" },
  { flag: "🟢", text: "Nia plej altvalora trezoro estas vi, homo." },
];

export default function PeaceTicker() {
  const tickerItems = peaceMessages.map((msg, index) => (
    <span key={index} className="inline-flex items-center gap-2 mx-8 flex-shrink-0">
      <span className="text-lg">{msg.flag}</span>
      <Heart className="w-3 h-3 text-red-400 fill-red-400" />
      <span className="text-gold-200/80 text-sm">{msg.text}</span>
      <span className="text-gold-500/30 mx-2">♦</span>
    </span>
  ));

  return (
    <div className="bg-dark-200/60 backdrop-blur-sm border-b border-gold-500/10 overflow-hidden py-2">
      <div className="ticker-content flex" style={{ animationDuration: "50s" }}>
        {tickerItems}
        {tickerItems}
        {tickerItems}
      </div>
    </div>
  );
}

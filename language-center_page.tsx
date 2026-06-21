"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LCN_AI from "@/components/LCN_AI";
import { languages, type Language } from "@/lib/i18n";
import { Globe, ArrowRight, Heart, Sparkles, BookOpen, Music, Camera, MapPin, Utensils, Landmark } from "lucide-react";

const welcomeMessages: Record<Language, { title: string; message: string; features: string[] }> = {
  mn: {
    title: "Тавтай морил!",
    message: "LCN TV-г сонгосонд тань баярлалаа. Бид таны айлчлалыг хүндэтгэн үздэг. Монголоор аялах аялалдаа таатай байхыг хүсэе.",
    features: ["Мэдээ", "Соёл", "Түүх", "Аялал", "Хоол"],
  },
  en: {
    title: "Welcome!",
    message: "Thank you for choosing LCN TV. We are honored by your visit. Enjoy your journey through Mongolia.",
    features: ["News", "Culture", "History", "Travel", "Cuisine"],
  },
  zh: {
    title: "欢迎！",
    message: "感谢您选择LCN电视。我们深感荣幸。祝您在蒙古之旅愉快。",
    features: ["新闻", "文化", "历史", "旅游", "美食"],
  },
  ru: {
    title: "Добро пожаловать!",
    message: "Благодарим вас за выбор LCN TV. Мы чувствуем себя честью от вашего визита. Наслаждайтесь путешествием по Монголии.",
    features: ["Новости", "Культура", "История", "Путешествия", "Кухня"],
  },
  ko: {
    title: "환영합니다!",
    message: "LCN TV를 선택해 주셔서 감사합니다. 귀하의 방문을 영광으로 생각합니다. 몽골 여행을 즐기시기 바랍니다.",
    features: ["뉴스", "문화", "역사", "여행", "요리"],
  },
  ja: {
    title: "ようこそ！",
    message: "LCNテレビを選んでいただきありがとうございます。ご来訪を光栄に思います。モンゴルの旅をお楽しみください。",
    features: ["ニュース", "文化", "歴史", "旅行", "料理"],
  },
  fr: {
    title: "Bienvenue!",
    message: "Merci d'avoir choisi LCN TV. Nous sommes honorés par votre visite. Profitez de votre voyage en Mongolie.",
    features: ["Actualités", "Culture", "Histoire", "Voyage", "Cuisine"],
  },
  de: {
    title: "Willkommen!",
    message: "Vielen Dank, dass Sie LCN TV gewählt haben. Wir fühlen uns durch Ihren Besuch geehrt. Genießen Sie Ihre Reise durch die Mongolei.",
    features: ["Nachrichten", "Kultur", "Geschichte", "Reise", "Küche"],
  },
  es: {
    title: "¡Bienvenido!",
    message: "Gracias por elegir LCN TV. Nos sentimos honrados por su visita. Disfrute de su viaje por Mongolia.",
    features: ["Noticias", "Cultura", "Historia", "Viaje", "Cocina"],
  },
  tr: {
    title: "Hoş geldiniz!",
    message: "LCN TV'yi seçtiğiniz için teşekkür ederiz. Ziyaretinizden onur duyuyoruz. Moğolistan yolculuğunuzun tadını çıkarın.",
    features: ["Haberler", "Kültür", "Tarih", "Seyahat", "Mutfak"],
  },
  ar: {
    title: "أهلاً وسهلاً!",
    message: "شكراً لاختياركم تلفزيون LCN. نحن مُكرّسون لزيارتكم. استمتعوا برحلتكم عبر منغوليا.",
    features: ["أخبار", "ثقافة", "تاريخ", "سفر", "مطبخ"],
  },
  hi: {
    title: "स्वागत है!",
    message: "LCN TV चुनने के लिए धन्यवाद। हम आपकी यात्रा से सम्मानित हैं। मंगोलिया की यात्रा का आनंद लें।",
    features: ["समाचार", "संस्कृति", "इतिहास", "यात्रा", "पाक कला"],
  },
  vi: {
    title: "Chào mừng!",
    message: "Cảm ơn bạn đã chọn LCN TV. Chúng tôi vinh dự được đón tiếp bạn. Chúc bạn có một chuyến đi thú vị qua Mông Cổ.",
    features: ["Tin tức", "Văn hóa", "Lịch sử", "Du lịch", "Ẩm thực"],
  },
  th: {
    title: "ยินดีต้อนรับ!",
    message: "ขอบคุณที่เลือก LCN TV เรารู้สึกเป็นเกียรติที่ได้ต้อนรับคุณ ขอให้สนุกกับการเดินทางผ่านมองโกเลีย",
    features: ["ข่าว", "วัฒนธรรม", "ประวัติศาสตร์", "การท่องเที่ยว", "อาหาร"],
  },
  eo: {
    title: "Bonvenon!",
    message: "Dankon pro via elekto de LCN TV. Ni honoras vian viziton. Ĝuu vian vojaĝon tra Mongolio.",
    features: ["Novaĵoj", "Kulturo", "Historio", "Vojaĝo", "Kuirarto"],
  },
};

const contentSections = [
  { icon: BookOpen, title: "Мэдээ", titleEn: "News", desc: "Монголын болон олон улсын мэдээ", descEn: "Mongolian and international news" },
  { icon: Music, title: "Соёл", titleEn: "Culture", desc: "Монголын соёл, урлаг, уламжлал", descEn: "Mongolian culture, art, traditions" },
  { icon: Landmark, title: "Түүх", titleEn: "History", desc: "Монголын баялаг түүх", descEn: "Rich history of Mongolia" },
  { icon: MapPin, title: "Аялал", titleEn: "Travel", desc: "Монголын гайхамшигт газрууд", descEn: "Amazing places in Mongolia" },
  { icon: Utensils, title: "Хоол", titleEn: "Cuisine", desc: "Монголын уламжлалт хоол", descEn: "Traditional Mongolian cuisine" },
  { icon: Camera, title: "Видео", titleEn: "Video", desc: "Баримтат кино, нэвтрүүлэг", descEn: "Documentaries, programs" },
];

export default function LanguageCenterPage() {
  const [selectedLang, setSelectedLang] = useState<Language>("mn");
  const [showWelcome, setShowWelcome] = useState(true);

  const welcome = welcomeMessages[selectedLang];
  const langConfig = languages.find((l) => l.code === selectedLang);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="pt-32 md:pt-36 pb-24 md:pb-8 mobile-pb">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-gold-400" />
            <h1 className="text-3xl md:text-4xl font-black text-gold-gradient">
              ХЭЛНИЙ ТӨВ
            </h1>
          </div>

          {/* Language Selector */}
          <div className="glass rounded-2xl p-6 border border-gold-500/20 mb-8">
            <h3 className="text-white font-bold mb-4">Хэл сонгох / Choose Language</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setSelectedLang(lang.code); setShowWelcome(true); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedLang === lang.code
                      ? "bg-gold-500/20 text-gold-400 border border-gold-500/50"
                      : "bg-dark-100/50 text-gray-400 border border-gold-500/10 hover:text-gold-300"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Welcome Experience Panel */}
          {showWelcome && (
            <div className="glass rounded-2xl p-8 border border-gold-500/20 mb-8 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-gold-400" />
                  <span className="text-gold-400 font-bold text-lg">{welcome.title}</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{langConfig?.flag}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-white">{langConfig?.nativeName}</h2>
                    <p className="text-gold-400/80">{langConfig?.name}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
                  {welcome.message}
                </p>

                <div className="flex flex-wrap gap-3">
                  {welcome.features.map((feature, index) => (
                    <span key={index} className="px-4 py-2 bg-gold-500/10 text-gold-400 rounded-full border border-gold-500/20 text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setShowWelcome(false)}
                  className="mt-6 flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <span>Үргэлжлүүлэх</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Content Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="group relative rounded-2xl overflow-hidden card-hover bg-dark-100/50 border border-gold-500/10 hover:border-gold-500/30 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{selectedLang === "mn" ? section.title : section.titleEn}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedLang === "mn" ? section.desc : section.descEn}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-gold-400 text-sm group-hover:text-gold-300 transition-colors">
                    <span>Дэлгэрэнгүй</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Language Stats */}
          <div className="mt-8 glass rounded-2xl p-6 border border-gold-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-gold-400">15</div>
                <div className="text-gray-400 text-sm mt-1">Дэмжигдсэн хэл</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gold-400">24/7</div>
                <div className="text-gray-400 text-sm mt-1">Шууд дамжуулалт</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gold-400">1000+</div>
                <div className="text-gray-400 text-sm mt-1">Видео контент</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gold-400">50+</div>
                <div className="text-gray-400 text-sm mt-1">Мэдээ өдөрт</div>
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

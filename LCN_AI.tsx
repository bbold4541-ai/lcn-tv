"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function LCN_AI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Сайн уу! Би LCN AI туслах. Танд ямар тусламж хэрэгтэй вэ?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response (placeholder for future AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "Баярлалаа! Таны асуултыг хүлээн авлаа. Би одоогоор demo горимд ажиллаж байна. Жинхэнэ AI холбогдохоор танд илүү сайн тусламж үзүүлэх болно.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 gold-glow ${
          isOpen
            ? "bg-red-500/20 border border-red-500/50 text-red-400"
            : "bg-gold-500/20 border border-gold-500/50 text-gold-400 hover:bg-gold-500/30"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 md:bottom-24 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-96 max-w-md">
          <div className="glass-gold rounded-2xl overflow-hidden shadow-2xl shadow-gold-500/20">
            {/* Header */}
            <div className="bg-gold-500/20 px-4 py-3 border-b border-gold-500/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/30 flex items-center justify-center">
                <Bot className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="text-gold-300 font-bold text-sm">LCN AI Туслах</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400/80">Идэвхтэй</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-gold-500/20"
                        : "bg-gold-500/30"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-4 h-4 text-gold-400" />
                    ) : (
                      <Bot className="w-4 h-4 text-gold-400" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      message.sender === "user"
                        ? "bg-gold-500/20 text-gold-200 rounded-tr-none"
                        : "bg-dark-100/80 text-gray-300 rounded-tl-none border border-gold-500/10"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gold-500/20">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Мессеж бичнэ үү..."
                  className="flex-1 bg-dark-100/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-sm text-gold-200 placeholder:text-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="p-2.5 bg-gold-500/20 hover:bg-gold-500/30 rounded-xl text-gold-400 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

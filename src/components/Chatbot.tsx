"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageSquare, X, Send, Phone, Calendar, CheckCircle2 } from "lucide-react";

interface ChatbotProps {
  onOpenBooking: () => void;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  quickReplies?: string[];
}

// Comprehensive Knowledge Base based directly on sflush.com.au
const knowledgeBase = [
  {
    keywords: ["health check", "99", "$99", "check", "inspection"],
    reply:
      "Our signature Plumbing Health Check is only $99! Trevor inspects all accessible plumbing, tapware, cisterns, flexi-hoses, pressure, and hot water units. You receive clear advice on what needs immediate attention and what can safely wait, with zero sales pressure.",
    quickReplies: ["Book $99 Check", "WhatsApp Trevor", "Call Trevor Now"],
  },
  {
    keywords: ["emergency", "urgent", "burst", "flooding", "leak", "after hours", "tonight", "fast"],
    reply:
      "For urgent emergencies (burst pipes, major sewage backups, gas leaks), Trevor provides 24/7 rapid response across North Brisbane and the Redcliffe Peninsula. Don't wait for a form response — please call or WhatsApp Trevor directly on 0448 899 780!",
    quickReplies: ["Call 0448 899 780", "WhatsApp 0448 899 780", "Book an Appointment"],
  },
  {
    keywords: ["hot water", "heater", "cylinder", "solar", "heat pump", "no hot water", "cold water"],
    reply:
      "Trevor services, repairs, and installs all types of hot water systems (electric, gas, and heat pumps). Unlike big companies who push $5,000+ full replacements, Trevor diagnoses the real issue (like valves or elements) to save you money whenever possible!",
    quickReplies: ["Book Hot Water Repair", "WhatsApp Trevor", "Call Trevor Direct"],
  },
  {
    keywords: ["drain", "blocked", "cctv", "camera", "tree root", "sewer", "stormwater", "toilet blocked"],
    reply:
      "We use high-definition CCTV drain cameras to locate the exact cause of blockages (especially Brisbane tree roots!) and high-pressure water jetting to clear sewer and stormwater lines permanently.",
    quickReplies: ["Book Drain Clearing", "WhatsApp Photo of Drain", "Emergency Call"],
  },
  {
    keywords: ["gas", "gasfitter", "cooktop", "leak", "stove", "heater", "l29914"],
    reply:
      "Yes! Trevor is a fully licensed Queensland Gasfitter (License: L29914). We handle gas cooktop/oven installations, gas line extensions, pressure drop testing, leak detection, and issue official safety compliance certificates.",
    quickReplies: ["Book Gas Service", "Call Trevor: 0448 899 780", "WhatsApp Trevor"],
  },
  {
    keywords: ["area", "suburb", "location", "service area", "where", "chermside", "redcliffe", "margate"],
    reply:
      "Straight Flush services homes and businesses across North Brisbane and the Redcliffe Peninsula, including Margate, Chermside, Aspley, Kedron, Redcliffe, Scarborough, Woody Point, Stafford, Nundah, Lutwyche, and surrounding northern suburbs.",
    quickReplies: ["Check My Suburb", "Book Appointment", "WhatsApp Trevor"],
  },
  {
    keywords: ["price", "cost", "quote", "rate", "fee", "estimate", "transparent"],
    reply:
      "We provide 100% upfront fixed pricing before starting any work. No surprise call-out fees or inflated invoices. In our clients' words, the quote is 'pretty darn close to the finished total, not blown up with extras.'",
    quickReplies: ["Get a Free Quote", "Book $99 Health Check", "WhatsApp Trevor"],
  },
  {
    keywords: ["license", "licence", "qbcc", "insured", "qualified", "trevor"],
    reply:
      "Trevor has over 20 years of licensed experience. Credentials: QBCC License 15092668, Gas License L29914, Plumber 23295, Contractor 1293897, ABN 27 625 979 777. You deal directly with Trevor — no apprentices without supervision and no call centres!",
    quickReplies: ["About Trevor", "Book Service", "WhatsApp Direct"],
  },
  {
    keywords: ["renovation", "bathroom", "kitchen", "laundry", "remodel"],
    reply:
      "We do complete plumbing rough-ins and fit-offs for bathroom, kitchen, and laundry renovations. From luxury tapware to whole-home repiping and water filtration systems, Trevor delivers punctual and immaculate finishes.",
    quickReplies: ["Discuss Renovation", "WhatsApp Trevor Details", "Call Trevor 0448 899 780"],
  },
  {
    keywords: ["hours", "open", "time", "weekend", "sunday", "saturday"],
    reply:
      "Standard operating hours are Monday to Sunday from 6:00 AM to 4:00 PM. Emergency service is available 24 hours a day, 7 days a week for urgent plumbing issues.",
    quickReplies: ["Call Now", "WhatsApp 24/7", "Book an Inspection"],
  },
];

function getBotResponse(userText: string): { reply: string; quickReplies: string[] } {
  const normalized = userText.toLowerCase().trim();

  // Check against knowledge base
  for (const item of knowledgeBase) {
    if (item.keywords.some((kw) => normalized.includes(kw))) {
      return { reply: item.reply, quickReplies: item.quickReplies };
    }
  }

  // Greeting
  if (normalized.match(/^(hi|hello|hey|g'day|morning|afternoon|salam)/)) {
    return {
      reply:
        "G'day! I'm Trevor's digital assistant at Straight Flush Plumbing Solutions. How can I help you today? You can ask about our $99 Health Check, emergency repairs, hot water, blocked drains, or message Trevor directly on WhatsApp.",
      quickReplies: ["$99 Health Check", "Emergency Plumbing", "WhatsApp Trevor", "Call Trevor"],
    };
  }

  // Fallback
  return {
    reply:
      "Thanks for your question! Trevor can give you straight advice and an upfront quote for your specific situation. Would you like to book a quick consultation, message on WhatsApp, or call him directly on 0448 899 780?",
    quickReplies: ["Book an Appointment", "WhatsApp Trevor", "Call 0448 899 780"],
  };
}

export default function Chatbot({ onOpenBooking }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "G'day! 👋 Welcome to Straight Flush Plumbing Solutions. I can answer questions about our services, $99 health check, pricing, or emergency response times.",
      time: "Just now",
      quickReplies: ["$99 Plumbing Check", "Emergency Service", "WhatsApp Trevor", "Hot Water Systems"],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    setHasInteracted(true);
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");

    // Simulate typing delay
    setIsTyping(true);
    setTimeout(() => {
      const response = getBotResponse(query);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickReplies: response.quickReplies,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 550);
  };

  const handleQuickReply = (text: string) => {
    if (
      text === "Book an Appointment" ||
      text === "Book $99 Check" ||
      text === "Book Now" ||
      text === "Get a Free Quote" ||
      text === "Book Hot Water Repair" ||
      text === "Book Drain Clearing" ||
      text === "Book Gas Service" ||
      text === "Book an Inspection" ||
      text === "Discuss Renovation"
    ) {
      onOpenBooking();
      return;
    }
    if (
      text === "Call Trevor" ||
      text === "Call Trevor Now" ||
      text === "Call Trevor Direct" ||
      text === "Call Now" ||
      text === "Call 0448 899 780" ||
      text === "Emergency Call"
    ) {
      window.location.href = "tel:0448899780";
      return;
    }
    if (
      text === "WhatsApp Trevor" ||
      text === "WhatsApp 0448 899 780" ||
      text === "WhatsApp Direct" ||
      text === "WhatsApp Photo of Drain" ||
      text === "WhatsApp Trevor Details" ||
      text === "WhatsApp 24/7"
    ) {
      window.open(
        "https://wa.me/61448899780?text=Hi%20Trevor,%20I'm%20contacting%20you%20from%20the%20Straight%20Flush%20Plumbing%20website%20regarding%20a%20service.",
        "_blank"
      );
      return;
    }
    handleSend(text);
  };

  return (
    <>
      {/* Floating Action Buttons Area (Bottom Right) */}
      <div className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        
        {/* Floating WhatsApp Button */}
        {!isOpen && (
          <a
            href="https://wa.me/61448899780?text=Hi%20Trevor,%20I'm%20contacting%20you%20from%20Straight%20Flush%20Plumbing%20Solutions."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Trevor on WhatsApp"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs py-2 px-3 rounded-full shadow-lg border border-white transition-all cursor-pointer group"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp Trevor</span>
          </a>
        )}

        {/* Chatbot Bubble Header Banner */}
        {!isOpen && !hasInteracted && (
          <div
            className="bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-2xl shadow-xl border border-red-500/40 flex items-center gap-2 animate-bounce cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Ask Trevor&apos;s Assistant (24/7)</span>
          </div>
        )}

        {/* Floating Chat Launcher Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close chat" : "Open chat with Trevor's assistant"}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-red-700 via-red-600 to-amber-500 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-white cursor-pointer relative group"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 md:bottom-22 right-3 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-96 max-h-[85vh] sm:max-h-[600px] h-[550px] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white px-4 py-3.5 flex items-center justify-between border-b border-red-900/40 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-800">
                <Image
                  src="/trevor.png"
                  alt="Trevor"
                  fill
                  className="object-cover object-top"
                  sizes="36px"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-slate-900 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm leading-tight text-white">Trevor&apos;s Assistant</h3>
                  <span className="text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.2 rounded-full">AI</span>
                </div>
                <p className="text-[10px] text-slate-300">Straight Flush Plumbing • 24/7 Live Info</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close chat window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sticky Action Bar inside Bot: Call, WhatsApp, and Book Now */}
          <div className="bg-slate-900/95 backdrop-blur-md px-2.5 py-2 border-b border-slate-800 grid grid-cols-3 gap-1.5 shrink-0 z-10 shadow-xs">
            {/* Call */}
            <a
              href="tel:0448899780"
              className="py-1.5 px-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold rounded-xl text-[11px] flex items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer"
            >
              <Phone className="w-3 h-3 text-amber-300 shrink-0" />
              <span className="truncate">Call</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/61448899780?text=Hi%20Trevor,%20I'm%20contacting%20you%20from%20the%20Straight%20Flush%20Plumbing%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-1.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-bold rounded-xl text-[11px] flex items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer"
            >
              <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="truncate">WhatsApp</span>
            </a>

            {/* Book Now */}
            <button
              onClick={() => onOpenBooking()}
              className="py-1.5 px-1.5 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-slate-950 font-extrabold rounded-xl text-[11px] flex items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer"
            >
              <Calendar className="w-3 h-3 text-slate-950 shrink-0" />
              <span className="truncate">Book</span>
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    msg.sender === "user"
                      ? "bg-red-600 text-white rounded-tr-none"
                      : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>

                {/* Quick Reply Pills */}
                {msg.sender === "bot" && msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => handleQuickReply(qr)}
                        className="text-[11px] font-semibold bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 hover:border-red-300 px-2.5 py-1 rounded-full transition-all cursor-pointer shadow-2xs"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-white border border-slate-200 rounded-2xl px-3.5 py-2 w-fit shadow-xs">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[11px] font-medium text-slate-400 ml-1">Trevor&apos;s Assistant is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about price, $99 check, emergency..."
              className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 bg-slate-50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400 text-white flex items-center justify-center shrink-0 shadow-sm transition-all cursor-pointer disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}

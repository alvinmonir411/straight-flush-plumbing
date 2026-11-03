"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";

interface FAQProps {
  onOpenBooking: () => void;
}

const faqs = [
  {
    question: "Why do I deal directly with Trevor rather than a call centre?",
    answer:
      "Because Trevor owns and operates Straight Flush Plumbing Solutions himself. When you call, you speak to the licensed tradesman who will actually complete or supervise your job. That means no misunderstandings, no junior apprentices sent without supervision, and zero corporate overhead passed onto your bill.",
  },
  {
    question: "What does the $99 Plumbing Health Check include?",
    answer:
      "The $99 Health Check covers an inspection of all accessible plumbing, tapware, cisterns, flexi-hoses, water meter flow, and hot water systems. Trevor identifies wear and early warning signs, giving you clear advice on what needs immediate attention and what can safely wait.",
  },
  {
    question: "Are your quotes accurate, or will the final invoice blow out?",
    answer:
      "Trevor prides himself on transparent pricing. Quotes are detailed and clear before work begins. In the words of our clients, the quote is 'pretty darn close to the finished total, not blown up with extra things.' If unexpected complications arise underground, you are always consulted first.",
  },
  {
    question: "What areas do you service in Queensland?",
    answer:
      "We service homes and businesses across North Brisbane and the Redcliffe Peninsula, including Margate, Chermside, Kedron, Aspley, Redcliffe, Scarborough, Woody Point, Stafford, Nundah, Lutwyche, and Everton Park.",
  },
  {
    question: "What should I do in an after-hours plumbing emergency?",
    answer:
      "Don't wait for an online form response — call Trevor directly at 0448 899 780. In the meantime, locate your main water shut-off valve (usually at your front boundary) and turn it clockwise to stop mains flooding.",
  },
];

export default function FAQ({ onOpenBooking }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column matching mockup card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            
            <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=800&auto=format&fit=crop"
                alt="Architectural plumbing blueprints and precision engineering plans"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#155dfc] bg-[#155dfc]/10 px-3.5 py-1.5 rounded-full inline-block">
                FAQ
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Got Questions? <br className="hidden sm:inline" />
                <span className="text-[#155dfc]">We&apos;ve Got Straight Answers.</span>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Clear advice about your plumbing, gas, and hot water systems. If you don&apos;t see your question answered here, contact Trevor directly.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/20 transition-all group cursor-pointer"
              >
                <span>Ask Trevor a Question</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Accordion List matching mockup */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`bg-white rounded-2xl border transition-all ${
                    isOpen ? "border-red-300 shadow-md" : "border-slate-200 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base select-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#155dfc] text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { PhoneCall, Truck, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Contact Trevor",
    desc: "Call 0448 899 780 or send details online. Talk directly with the tradesman who will do your work.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Accurate Assessment",
    desc: "Trevor arrives on time, diagnoses the root cause (not just symptoms), and gives an honest fixed quote.",
    icon: Truck,
  },
  {
    step: "03",
    title: "Careful Workmanship",
    desc: "20+ years of plumbing expertise applied to deliver performance solutions that last.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Clean Finish & Warranty",
    desc: "Worksite left spotless, clear invoice itemisation, and full QBCC compliance certification.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#155dfc] bg-[#155dfc]/10 px-3.5 py-1.5 rounded-full inline-block">
            Straightforward Service
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Simple <span className="text-[#155dfc]">4 Step Process</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No call centres, no passing you around. Just clear communication from start to finish.
          </p>
        </div>

        {/* 4 Steps Row with Connecting Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col items-center text-center group hover:bg-[#155dfc]/5 hover:border-[#155dfc]/30 hover:shadow-xl transition-all"
              >
                {/* Connecting arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                {/* Step badge with #155dfc matching mockup */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#155dfc] text-white flex items-center justify-center shadow-lg shadow-[#155dfc]/25 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-amber-400 text-slate-950 font-black text-xs rounded-full flex items-center justify-center shadow">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

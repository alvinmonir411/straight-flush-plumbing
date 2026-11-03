"use client";

import React from "react";
import Image from "next/image";
import { Clock, ShieldCheck, Wrench, DollarSign, Award, UserCheck } from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    { title: "Deal Directly With Trevor", icon: UserCheck, desc: "No call centres or phone trees" },
    { title: "20+ Years Licensed", icon: ShieldCheck, desc: "QBCC: 15092668 & Gas L29914" },
    { title: "Fix Cause, Not Symptom", icon: Wrench, desc: "Permanent maintenance solutions" },
    { title: "Transparent Invoicing", icon: DollarSign, desc: "Quotes match the finished total" },
    { title: "24/7 Emergency Help", icon: Clock, desc: "Plumbing dramas don't keep hours" },
  ];

  return (
    <section id="why-us" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Red/Charcoal Showcase Container matching Logo Theme */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white overflow-hidden p-8 sm:p-12 lg:p-16 shadow-2xl border border-red-950/80">
          
          {/* Subtle water ripple glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                Why Choose Us
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                The Straight Flush <span className="text-red-500">Difference</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Don&apos;t gamble on your home. We provide straight answers, careful workmanship, and honest advice about what needs attention now and what can safely wait.
              </p>

              {/* 5 Icons Row matching mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-6 border-t border-white/15">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/40 text-amber-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-100 block">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Visual: Banner / Image from sflush.com.au */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              <div className="relative w-full max-w-sm aspect-4/3 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-800">
                <Image
                  src="/banner.jpg"
                  alt="Straight Flush High Performance Plumbing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Hand-drawn style badge annotation matching mockup */}
              <div className="absolute -top-4 -right-2 sm:right-2 bg-amber-400 text-slate-950 px-4 py-2 rounded-2xl font-black text-xs shadow-xl transform rotate-3 flex items-center gap-1.5 border border-amber-300">
                <span>♠ Your Local Plumbing Partner!</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

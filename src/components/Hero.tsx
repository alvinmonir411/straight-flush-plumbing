"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Clock, Award, CheckCircle2, UserCheck } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero" className="relative pt-6 pb-20 sm:pt-10 sm:pb-20 md:py-20 bg-gradient-to-b from-red-50/50 via-white to-slate-50 overflow-hidden">
      {/* Background ambient decorative blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Top pill badge - Single clean line on all mobile screens */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-50 border border-[#155dfc]/30 text-[#155dfc] text-[11px] sm:text-xs font-bold whitespace-nowrap">
              <span>Practical Advice</span>
              <span className="text-[#155dfc]/50">•</span>
              <span>Upfront Pricing</span>
              <span className="hidden sm:inline text-[#155dfc]/50">•</span>
              <span className="hidden sm:inline">Deal Directly With Trevor</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Don&apos;t Gamble On Your{" "}
              <span className="text-red-600 underline decoration-red-300 decoration-wavy decoration-2">
                Plumbing &amp; Gas
              </span>
            </h1>

            {/* Subheading from sflush.com.au */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Choose <strong className="text-slate-900 font-bold">Straight Flush Plumbing Solutions</strong> for straight answers, careful workmanship and performance solutions. Serving homes across North Brisbane and the Redcliffe Peninsula.
            </p>

            {/* Urgent Notice Banner */}
            <div className="p-3 sm:p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-left max-w-xl mx-auto lg:mx-0 flex items-center gap-2.5 sm:gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping shrink-0" />
              <p className="text-xs sm:text-sm text-slate-800 leading-snug">
                <strong className="text-red-700 font-bold">Urgent plumbing problem?</strong> Don&apos;t wait for an online response — call Trevor directly on{" "}
                <a href="tel:0448899780" className="text-red-700 font-extrabold underline hover:text-red-800">
                  0448 899 780
                </a>
                .
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 hover:shadow-xl transition-all group cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="tel:0448899780"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm sm:text-base shadow-md transition-all group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span>Call Trevor: 0448 899 780</span>
              </a>
            </div>

            {/* 4 Trust Guarantee Badges Row with #155dfc accent */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-xs">
                  <p className="font-bold text-slate-800">24/7</p>
                  <p className="text-slate-500">Emergency Dispatch</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-xs">
                  <p className="font-bold text-slate-800">QBCC: 15092668</p>
                  <p className="text-slate-500">Plumber &amp; Gasfitter</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-xs">
                  <p className="font-bold text-slate-800">Deal Direct</p>
                  <p className="text-slate-500">No Call Centres</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-xs">
                  <p className="font-bold text-slate-800">Upfront Quotes</p>
                  <p className="text-slate-500">Fixed Total Pricing</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (High Quality Plumber In-Action matching mockup) */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 sm:mt-8 lg:mt-0 pb-10 sm:pb-8">
            
            <div className="w-full max-w-sm sm:max-w-md aspect-4/5 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=85&w=1000&auto=format&fit=crop"
                alt="Straight Flush Master Plumber in action repairing pipework"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 500px"
              />

              {/* Top pill badge cleanly positioned with zero overlap */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  On-Duty Across Brisbane
                </span>
              </div>
            </div>

            {/* Floating Emergency Card matching Crimson & Black branding - Sits cleanly at bottom without colliding */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 right-4 sm:left-auto sm:-right-4 bg-slate-950 text-white p-4 sm:p-5 rounded-2xl shadow-2xl border-2 border-red-600 sm:max-w-xs z-20">
              <p className="text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider">
                Urgent Plumbing Help?
              </p>
              <div className="mt-1.5 sm:mt-2 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-md">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <a href="tel:0448899780" className="text-lg sm:text-xl font-extrabold text-white tracking-tight hover:text-amber-300 transition-colors">
                    0448 899 780
                  </a>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Available 24/7 • Direct to Trevor</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

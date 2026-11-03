"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck, Clock } from "lucide-react";

interface CTASectionProps {
  onOpenBooking: () => void;
}

export default function CTASection({ onOpenBooking }: CTASectionProps) {
  return (
    <section className="relative py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white overflow-hidden shadow-2xl border-t border-red-900/50">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,38,38,0.2),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              24/7 Rapid Emergency Response
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Plumbing Dramas Don&apos;t Keep Business Hours
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Serving homes across North Brisbane and the Redcliffe Peninsula. For urgent leaks, blocked sewers or hot water failures, don&apos;t wait — call Trevor directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all group cursor-pointer"
            >
              <span>Book Online / Request Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:0448899780"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-xs transition-all group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-amber-400 uppercase font-bold leading-none">Emergency Call 24/7</span>
                <span className="text-sm font-black">0448 899 780</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

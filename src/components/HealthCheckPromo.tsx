"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, AlertCircle } from "lucide-react";

interface HealthCheckPromoProps {
  onOpenBooking: () => void;
}

export default function HealthCheckPromo({ onOpenBooking }: HealthCheckPromoProps) {
  return (
    <section id="health-check" className="py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-red-950 text-white relative overflow-hidden">
      {/* Background glowing red accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Prevent Costly Emergencies
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Comprehensive Plumbing Health Check: <span className="text-amber-400">Only $99</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Don&apos;t wait for a burst flexi-hose to flood your floorboards or a silent leak to drive up your water bill. Trevor will thoroughly inspect all accessible plumbing for wear, pressure irregularities, and warning signs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Check accessible plumbing for leaks &amp; wear</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Identify problems before costly damages</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Clear advice: what needs fixing now vs later</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Honest assessment with zero high-pressure sales</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 text-center">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/20 w-full max-w-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">Total Investment</span>
                <span className="text-4xl font-black text-amber-400 block my-1">$99 <span className="text-xs font-normal text-slate-400">incl. GST</span></span>
                <span className="text-[11px] text-slate-400 block mb-4">Homes across North Brisbane &amp; Peninsula</span>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-6 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book $99 Check</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


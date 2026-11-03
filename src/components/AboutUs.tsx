"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Users, ThumbsUp, Clock, ArrowRight, ShieldCheck, UserCheck } from "lucide-react";

interface AboutUsProps {
  onOpenBooking: () => void;
}

export default function AboutUs({ onOpenBooking }: AboutUsProps) {
  return (
    <section id="about" className="py-20 bg-slate-50/80 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: Trevor's Real Photo from sflush.com.au */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Red decorative background circle */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 to-amber-500 rounded-full blur-2xl opacity-20 -z-10" />
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-red-600/10 absolute -z-10 -bottom-4 -left-4" />
            
            <div className="relative w-full max-w-sm aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <Image
                src="/trevor.png"
                alt="Trevor - Master Plumber and Business Owner"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="font-extrabold text-base">Trevor</p>
                <p className="text-xs text-red-200">Owner &amp; Operator • Margate &amp; Chermside</p>
              </div>
            </div>
          </div>

          {/* Middle Content: Exact text from sflush.com.au */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
              About Trevor
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Decades of Experience Means{" "}
              <span className="text-[#155dfc]">Better Results For You</span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              After more than 20 years as a fully licensed plumber, drainer and gasfitter, there&apos;s not much I haven&apos;t seen, waded through, drained or fixed.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Brisbane has its own unique plumbing challenges (have you seen the tree roots?), and knowing how to get to the bottom of a problem comes from years of working in local homes and businesses. Most of my career has been maintenance plumbing, which means I know how to find the cause of a tricky problem, not just patch up a symptom.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              And because I own and operate the business myself, <strong className="text-slate-900">you deal directly with me</strong>. No phone trees, no call centres, no passing you around. Just your local plumber, from the first phone call to the finished job.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">QBCC Lic: 15092668</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Gas Fitter Lic: L29914</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Deal Direct With Owner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Upfront Fixed Pricing</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all group cursor-pointer"
              >
                <span>Discuss Your Project With Trevor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards Stack with #155dfc matching mockup - Mobile 2x2 grid */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 hover:border-[#155dfc] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">20+</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Years Experience</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 hover:border-[#155dfc] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Direct with Trevor</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 hover:border-[#155dfc] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center shrink-0">
                <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">5.0★</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Community Reviews</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 sm:gap-4 hover:border-[#155dfc] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">24/7</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Emergency Help</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

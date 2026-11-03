"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Menu, X, ArrowRight, ShieldCheck, Clock } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top emergency announcement bar matching red & black branding */}
      <div className="bg-slate-950 text-slate-300 text-[11px] sm:text-xs py-2 px-3 sm:px-4 border-b border-red-950/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-red-400 font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              24/7 Emergency Dispatch
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">
              North Brisbane &amp; Redcliffe Peninsula
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="hidden md:inline text-slate-400 text-[11px]">
              QBCC: 15092668
            </span>
            <a
              href="tel:0448899780"
              className="text-amber-400 font-extrabold hover:text-amber-300 flex items-center gap-1.5 transition-colors tracking-tight text-xs sm:text-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              0448 899 780
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo from user's uploaded asset */}
            <a href="#" className="flex items-center py-1 group">
              <div className="relative h-11 w-44 xs:w-48 sm:h-14 sm:w-60">
                <Image
                  src="/logo.png"
                  alt="Straight Flush Plumbing Solutions"
                  fill
                  className="object-contain object-left group-hover:scale-[1.02] transition-transform"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation - Clean, focused 5 core items */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              <a href="#hero" className="text-sm font-bold text-[#155dfc] hover:text-[#0d4cdb] transition-colors">
                Home
              </a>
              <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-[#155dfc] transition-colors">
                Services
              </a>
              <a href="#health-check" className="text-sm font-semibold text-slate-700 hover:text-[#155dfc] transition-colors flex items-center gap-1.5">
                <span>$99 Health Check</span>
                <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded-full">
                  Special
                </span>
              </a>
              <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-[#155dfc] transition-colors">
                About Trevor
              </a>
              <a href="#testimonials" className="text-sm font-semibold text-slate-700 hover:text-[#155dfc] transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-[#155dfc] transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm shadow-md shadow-red-600/20 hover:shadow-lg transition-all group cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-lg">
            <div className="flex flex-col space-y-2">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#155dfc] bg-[#155dfc]/10"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Services
              </a>
              <a
                href="#health-check"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>$99 Health Check</span>
                <span className="text-[10px] bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">
                  Special
                </span>
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                About Trevor
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Customer Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Contact
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 bg-red-600 text-white font-bold rounded-xl text-center text-sm shadow-md cursor-pointer"
              >
                Request a Quote
              </button>
              <a
                href="tel:0448899780"
                className="w-full py-2.5 bg-slate-900 text-amber-400 font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call Trevor: 0448 899 780
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

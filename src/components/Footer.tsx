"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column with Real Logo */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block bg-white p-3 rounded-xl shadow-md">
              <div className="relative h-14 w-60">
                <Image
                  src="/logo.png"
                  alt="Straight Flush Plumbing Solutions Pty Ltd"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Straight answers, careful workmanship and performance solutions. Serving homes and businesses across North Brisbane and the Redcliffe Peninsula.
            </p>

            {/* Official Queensland Licences Badge Container */}
            <div className="pt-2 p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 max-w-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Queensland Government Licences</span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-slate-400">
                <span>QBCC: <strong className="text-white">15092668</strong></span>
                <span>Gas: <strong className="text-white">L29914</strong></span>
                <span>Plumber: <strong className="text-white">23295</strong></span>
                <span>Contractor: <strong className="text-white">1293897</strong></span>
              </div>
              <p className="text-[10px] text-slate-500 pt-1 border-t border-slate-800">
                ABN: 27 625 979 777
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">
                  About Trevor
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#health-check" className="hover:text-red-400 transition-colors">
                  $99 Health Check
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-red-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-red-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  $99 Plumbing Check
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  General Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Kitchen &amp; Bathroom Reno
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Hot Water Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Gas Fitting &amp; Leaks
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Blocked Drains &amp; CCTV
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Trevor</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Margate, QLD, 4019 &amp; Chermside (North Brisbane &amp; Peninsula)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:0448899780" className="hover:text-amber-400 text-white font-extrabold text-sm transition-colors">
                  0448 899 780
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href="mailto:Trevor@sflush.com.au" className="hover:text-red-400 transition-colors">
                  Trevor@sflush.com.au
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-medium">Mon – Sun: 6:00am – 4:00pm</span>
                  <span className="text-[11px] text-amber-400 font-semibold">24/7 for Emergency Service</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Straight Flush Plumbing Solutions Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="tel:0448899780" className="text-amber-400 hover:underline">
              Emergency: 0448 899 780
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

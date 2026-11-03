"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";

interface EmergencyStickyBarProps {
  onOpenBooking: () => void;
}

export default function EmergencyStickyBar({ onOpenBooking }: EmergencyStickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-red-950 px-3 py-2.5 shadow-2xl flex items-center gap-2">
      <a
        href="tel:0448899780"
        className="flex-1 py-2.5 px-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
      >
        <Phone className="w-4 h-4 text-amber-300" />
        <span>Call Trevor: 0448 899 780</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-2.5 px-3 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-slate-950 font-extrabold rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-slate-950" />
        <span>$99 Check / Quote</span>
      </button>
    </div>
  );
}

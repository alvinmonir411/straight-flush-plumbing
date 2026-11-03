"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";

interface EmergencyStickyBarProps {
  onOpenBooking: () => void;
}

export default function EmergencyStickyBar({ onOpenBooking }: EmergencyStickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-red-950/80 px-2.5 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl flex items-center gap-1.5">
      <a
        href="tel:0448899780"
        className="flex-[1.2] py-2.5 px-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
      >
        <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
        <span className="truncate">Call: 0448 899 780</span>
      </a>

      <a
        href="https://wa.me/61448899780?text=Hi%20Trevor,%20I'm%20contacting%20you%20from%20Straight%20Flush%20Plumbing%20Solutions."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="py-2.5 px-2.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-extrabold rounded-xl text-center text-xs flex items-center justify-center shadow-md cursor-pointer shrink-0"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-2.5 px-2 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-slate-950 font-extrabold rounded-xl text-center text-xs flex items-center justify-center gap-1 shadow-md cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-slate-950 shrink-0" />
        <span className="truncate">$99 Check</span>
      </button>
    </div>
  );
}

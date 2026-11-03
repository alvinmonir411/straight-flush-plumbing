"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Susan",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    suburb: "North Brisbane Homeowner",
    role: "Saved $5,200 on Hot Water",
    rating: 5,
    comment:
      "Outstanding service from Trevor! After another plumber came out and simply told us we needed to replace the entire hot water system, quoting us over $5,200, we decided to get a second opinion from Trevor. What a difference! Trevor took the time to properly assess the system, fixed the problem completely, and gave honest, practical advice rather than simply recommending an expensive replacement. Fantastic service, knowledgeable and honest!",
  },
  {
    name: "Lara",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    suburb: "Renovation Project Owner",
    role: "Verified Client",
    rating: 5,
    comment:
      "Trevor was recommended to me by a property manager, and after some pretty rocky experiences with plumbers in the past, he is the first plumber I’ve found who I genuinely trust. He tells you honestly what needs to be done now and what can wait. As an owner operator, his pricing is very reasonable. For me, the combination of skill, trust, honest advice and affordable pricing is hard to beat.",
  },
  {
    name: "Maria",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    suburb: "Bathroom Renovation Client",
    role: "Renovation Review",
    rating: 5,
    comment:
      "Trevor is a very capable and reasonable plumber. He will be very detailed in his invoices describing everything he does. His work is brilliant... he is punctual and goes beyond what is needed. We renovated our bathroom and he went above & beyond — it's amazing what it turned out like. Thanks Trevor, we are very happy!",
  },
  {
    name: "Danny",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    suburb: "Chermside Resident",
    role: "Emergency Fix",
    rating: 5,
    comment:
      "Posted job and received reply within minutes and did the job the next day. Great communication, quick and efficient, tidy work and of a high standard. Have kept his contact details for all future plumbing work. Highly recommended.",
  },
  {
    name: "Michelle",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    suburb: "Peninsula Homeowner",
    role: "Guttering & Plumbing",
    rating: 5,
    comment:
      "When Trevor gives you a quote, it is pretty darn close to the finished total, not blown up with 'extra' things. And the finished result is clean and very neatly done. We use him for all our plumbing and guttering needs, and every friend or relative we’ve referred him to has always been very happy.",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  const displayedReviews = reviews.slice(startIndex, startIndex + 3);

  return (
    <section id="testimonials" className="py-20 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching mockup */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#155dfc] bg-[#155dfc]/10 px-3.5 py-1.5 rounded-full inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our <span className="text-[#155dfc]">Customers Say</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Real feedback from Brisbane and Redcliffe Peninsula locals who rely on Trevor for honest plumbing.
          </p>
        </div>

        {/* 3 Review Cards Grid matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedReviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-red-300 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#155dfc]/30" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author row with unique circular avatar matching mockup */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#155dfc]/30 shadow-xs shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-extrabold text-slate-900 text-sm truncate leading-snug">{review.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 truncate">{review.suburb}</p>
                </div>
                <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full shrink-0">
                  {review.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous reviews"
            className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-1.5 items-center px-2">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === startIndex ? "w-6 bg-[#155dfc]" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next reviews"
            className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

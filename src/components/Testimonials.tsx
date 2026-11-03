"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ThumbsUp } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // 3 items for desktop view, wrapping around
  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-slate-50/80 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#155dfc] bg-[#155dfc]/10 px-3.5 py-1.5 rounded-full inline-block">
            Customer Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our <span className="text-[#155dfc]">Customers Say</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600">
            Real feedback from Brisbane and Redcliffe Peninsula locals who rely on Trevor for honest plumbing.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Review Cards: Exactly 1 card on Mobile (< lg), 3 cards on Desktop (lg+) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {visibleReviews.map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 justify-between ${
                  i === 0 ? "flex flex-col" : "hidden lg:flex flex-col"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#155dfc] flex items-center justify-center">
                      <Quote className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#155dfc]/30 shadow-xs shrink-0">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-extrabold text-slate-900 text-sm truncate leading-snug">{review.name}</h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      </div>
                      <p className="text-xs text-slate-500 truncate">{review.suburb}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-200/60 px-2.5 py-1 rounded-full shrink-0">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Sleek Modern Slider Navigation Controls */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-xs">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === currentIndex ? "w-6 bg-[#155dfc]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-11 h-11 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Current Slide Counter on Mobile */}
          <p className="text-center text-xs text-slate-400 mt-2 lg:hidden">
            Review <span className="font-bold text-slate-700">{currentIndex + 1}</span> of {reviews.length}
          </p>

        </div>

      </div>
    </section>
  );
}

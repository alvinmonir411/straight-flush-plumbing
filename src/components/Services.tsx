"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Flame, Bath, Wrench, RotateCcw, ArrowRight, ShieldCheck, Home } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const servicesList = [
  {
    id: "health-check",
    title: "Plumbing Health Check ($99)",
    badge: "$99 Signature Offer",
    description:
      "Check accessible plumbing for leaks, wear and warning signs. Identify problems before they become costly repairs, with clear advice about what needs attention now and what can wait.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=85&w=800&auto=format&fit=crop",
    features: ["Leak & pressure check", "Hot water inspection", "Cistern & tap check", "Written summary"],
  },
  {
    id: "maintenance",
    title: "Plumbing, Roof & Drainage Maintenance",
    badge: "Core Service",
    description:
      "Tapware, toilets, leaks and general plumbing repairs. Roof leaks, guttering, downpipes, plus comprehensive sewer, stormwater and subsurface drainage solutions.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=85&w=800&auto=format&fit=crop",
    features: ["Tapware & toilet repairs", "Roof & gutter leak fixes", "Subsurface drainage", "Stormwater solutions"],
  },
  {
    id: "renovations",
    title: "Kitchen, Bathroom & Laundry Renovations",
    badge: "Specialist",
    description:
      "Full plumbing rough-ins and fit-offs for modern kitchen, bathroom, and laundry remodels. Whole-home repiping, pipework relocations, and home water-filtration systems.",
    icon: Bath,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=85&w=800&auto=format&fit=crop",
    features: ["Complete bathroom rough-in", "Kitchen & laundry fit-offs", "Whole-home repiping", "Filtration systems"],
  },
  {
    id: "hot-water",
    title: "Hot Water Systems (Install & Repair)",
    badge: "Same-Day Fix",
    description:
      "New system installations and replacements. System upgrades to suit your household's hot-water demands. Expert fault-finding, servicing, valves, and emergency repairs.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=85&w=800&auto=format&fit=crop",
    features: ["Electric, gas & heat pumps", "Honest repair assessment", "Fast replacement installs", "Valves & element repairs"],
  },
  {
    id: "gas-fitting",
    title: "Gas Fitting & Safety Inspections",
    badge: "Licensed L29914",
    description:
      "Licensed gas appliance installation (cooktops, ovens, heaters), pipework installation, gas pressure testing, leak investigations, servicing, and compliance safety checks.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=85&w=800&auto=format&fit=crop",
    features: ["Appliance installation", "Gas line extensions", "Leak testing & compliance", "Safety certifications"],
  },
  {
    id: "blocked-drains",
    title: "Blocked Drains & CCTV Camera Inspections",
    badge: "Rapid Clearing",
    description:
      "High-definition CCTV drain camera inspections to locate the exact cause of blockages. High-pressure jet clearing for sewer and stormwater, with permanent solutions for tree roots.",
    icon: RotateCcw,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=85&w=800&auto=format&fit=crop",
    features: ["CCTV camera diagnosis", "Tree root cutting", "High-pressure jetting", "Recurring blockage fixes"],
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching mockup style */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#155dfc] bg-[#155dfc]/10 px-3.5 py-1.5 rounded-full inline-block">
            How Trevor Can Help
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Plumbing &amp; Gas Services for <span className="text-[#155dfc]">North Brisbane</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From everyday maintenance to tricky problems other plumbers may not take on, Trevor provides practical advice and plumbing solutions designed to perform properly.
          </p>
        </div>

        {/* 6 Cards Grid (matching mockup 2-row x 3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Content top half */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#155dfc]/10 text-[#155dfc] flex items-center justify-center group-hover:bg-[#155dfc] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#155dfc] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-5 pt-2 border-t border-slate-100">
                    {service.features.map((feat) => (
                      <li key={feat} className="text-xs text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#155dfc] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#155dfc] group-hover:text-[#0d4cdb] tracking-wide uppercase transition-colors cursor-pointer"
                  >
                    <span>Request Quote / Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Photo thumbnail bottom half matching mockup */}
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

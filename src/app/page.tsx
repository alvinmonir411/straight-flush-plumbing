"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HealthCheckPromo from "@/components/HealthCheckPromo";
import AboutUs from "@/components/AboutUs";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import EmergencyStickyBar from "@/components/EmergencyStickyBar";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  const handleSelectService = (_serviceName: string) => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans pb-16 md:pb-0">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow matching user mockup & authentic content */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <Services onSelectService={handleSelectService} />
        <HealthCheckPromo onOpenBooking={handleOpenBooking} />
        <AboutUs onOpenBooking={handleOpenBooking} />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <FAQ onOpenBooking={handleOpenBooking} />
        <CTASection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking & Quote Modal */}
      <BookingModal isOpen={isModalOpen} onClose={handleCloseBooking} />

      {/* Mobile-only Sticky Call & Booking Bar */}
      <EmergencyStickyBar onOpenBooking={handleOpenBooking} />

      {/* 24/7 AI Chatbot with Sticky Call, WhatsApp & Book Buttons */}
      <Chatbot onOpenBooking={handleOpenBooking} />
    </div>
  );
}

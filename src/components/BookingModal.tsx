"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Phone, Calendar, Clock, User, Mail, Wrench } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Emergency Plumbing",
    suburb: "",
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header matching red & black brand */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Direct to Trevor</span>
            <h3 className="text-xl font-bold">Request a Quote or Service</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Request Sent to Trevor!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.name || "Customer"}</span>. Trevor will personally review your details and call you shortly at{" "}
                <span className="font-bold text-red-600">{formData.phone || "your number"}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Susan Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0448 899 780"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Service Required</label>
                  <div className="relative">
                    <Wrench className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-slate-800"
                    >
                      <option value="Plumbing Health Check $99">$99 Plumbing Health Check</option>
                      <option value="Emergency Plumbing">24/7 Urgent Emergency</option>
                      <option value="Hot Water Systems">Hot Water System Repair/Install</option>
                      <option value="Blocked Drains & Tree Roots">Blocked Drains & CCTV Inspection</option>
                      <option value="Maintenance & Tapware">Plumbing, Roof & Drainage Maintenance</option>
                      <option value="Gas Fitting & Leaks">Gas Fitting & Safety Check</option>
                      <option value="Renovation Plumbing">Kitchen, Bathroom or Laundry Renovation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Suburb in Brisbane</label>
                  <input
                    type="text"
                    placeholder="e.g. Chermside / Margate / Kedron"
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Details About Your Issue</label>
                <textarea
                  rows={2}
                  placeholder="Describe your issue (e.g. leaking hot water tank, blocked stormwater, toilet running)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit to Trevor</span>
                  <span className="text-white">→</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-600" />
                Urgent drama? Call Trevor right now at{" "}
                <a href="tel:0448899780" className="text-red-600 font-bold hover:underline">
                  0448 899 780
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

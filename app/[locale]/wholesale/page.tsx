"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Clock,
  Layers,
  Percent,
   ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
} from "lucide-react";

const businessTypes = [
  "Retail Showroom",
  "Distributor / Wholesaler",
  "Institutional / Corporate Buyer",
  "Builder / Real Estate Developer",
  "Electrical Contractor",
];

const volumeRanges = [
  "50 - 200 Units",
  "200 - 500 Units",
  "500 - 1,000 Units",
  "1,000+ Units (Custom / Contract)",
];

const priorityProducts = [
  "Auro",
  "High Breeze",
  "Avencer",
  "Enticer",
  "Jazz",
  "Fantasy",
  "V130",
  "Mixed / Multi-Model Order",
];

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network submission delay for high-end UX feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <main className="min-h-screen bg-slate-50/50 selection:bg-blue-600 selection:text-white">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#07192f] text-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Direct Factory Wholesale Program</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                Bulk supply <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">engineered for scale.</span>
              </h1>

              <p className="max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed font-normal">
                Source high-performance ceiling fans and industrial ventilation systems in volume directly from our manufacturing hub. Tiered pricing and priority fulfillment guaranteed.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
                <div className="absolute -top-3 -right-3 rounded-xl bg-cyan-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-md">
                  B2B Direct
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Wholesale Advantages</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Designed for large-scale retail chains, real estate developers, and regional bulk distributors seeking dependable stock flow.
                </p>
                <div className="space-y-3.5 text-xs font-semibold">
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="rounded-lg bg-blue-500/20 p-2 text-cyan-400">
                      <Warehouse className="h-4 w-4" />
                    </div>
                    <span>Massive Production & Stock Capacity</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="rounded-lg bg-blue-500/20 p-2 text-cyan-400">
                      <Percent className="h-4 w-4" />
                    </div>
                    <span>Volume-Based Price Slabs</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          KEY VALUE PILLARS (GRID SECTION)
      ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">Enterprise Supply</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1 sm:text-4xl">
              Built for Large Volume Requirements
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              We streamline wholesale logistics to ensure commercial clients receive consistent product batches with strict adherence to quality checks.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Pillar 1 */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-200 hover:bg-white hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b2f5c] group-hover:bg-[#0b2f5c] group-hover:text-white transition-colors">
                <Boxes className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Tiered Volume Discounts</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Unlock optimized unit economics with price breaks structured specifically for medium-to-large procurement cycles.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-200 hover:bg-white hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b2f5c] group-hover:bg-[#0b2f5c] group-hover:text-white transition-colors">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Pan-India Freight Logistics</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Coordinated dispatch via trusted freight carriers ensuring safe transit of bulk crates directly to your warehouse.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-200 hover:bg-white hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b2f5c] group-hover:bg-[#0b2f5c] group-hover:text-white transition-colors">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Rigorous Quality Assurance</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Every bulk lot undergoes strict testing for performance stability, energy efficiency, and balanced airflow rotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHOLESALE ORDER FORM SECTION
      ========================================================= */}
      <section id="quote" className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-12 shadow-xl shadow-slate-900/5">
            {!submitted ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-blue-600">B2B Procurement</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                      Request Wholesale Quotation
                    </h2>
                  </div>
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0b2f5c]">
                    <Layers className="h-6 w-6" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Row 1: Contact Name & Company */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Contact Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contactName"
                        name="contactName"
                        type="text"
                        required
                        placeholder="e.g. Vikram Deshmukh"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Company / Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        placeholder="e.g. Deshmukh Trade Links"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="purchasing@company.com"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone / Direct Line <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>
                  </div>

                  {/* Row 3: Business Type & Volume Range */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Business Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        defaultValue=""
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      >
                        <option value="" disabled>Select business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="volume" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Estimated Order Volume <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="volume"
                        name="volume"
                        required
                        defaultValue=""
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      >
                        <option value="" disabled>Select quantity range</option>
                        {volumeRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Target Product Model & Delivery Location */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Primary Model of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="product"
                        name="product"
                        required
                        defaultValue=""
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      >
                        <option value="" disabled>Select model</option>
                        {priorityProducts.map((model) => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="destination" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Destination City / State <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="destination"
                        name="destination"
                        type="text"
                        required
                        placeholder="e.g. Pune, Maharashtra"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>
                  </div>

                  {/* Row 5: Detailed Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Specification Notes / Delivery Timeline
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Mention specific color preferences, blade sizes, target delivery dates, or custom branding requirements..."
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b2f5c] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-[#07192f] hover:shadow-xl hover:shadow-blue-900/30 active:scale-[0.99] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Generating Wholesale Quotation...</span>
                    ) : (
                      <>
                        <span>Submit Wholesale Request</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Our corporate sales division evaluates all bulk RFQs and responds with formal pro-forma pricing within 24 hours.
                  </p>
                </form>
              </>
            ) : (
              /* Success Confirmation State */
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center p-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-lg shadow-emerald-500/10 animate-bounce">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <span className="mt-6 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 uppercase tracking-widest">
                  RFQ Logged Successfully
                </span>

                <h3 className="mt-3 text-3xl font-bold text-slate-900 tracking-tight">
                  Quotation request received.
                </h3>

                <p className="mt-3 max-w-md text-sm text-slate-600 leading-relaxed font-normal">
                  Your bulk procurement specifications have been routed to our commercial sales desk. An account manager will prepare your custom price quote and contact you shortly.
                </p>

                <Link
                  href="/"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b2f5c] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#07192f]"
                >
                  <span>Return to Home</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
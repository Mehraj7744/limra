"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  Building,
  CheckCircle2,
  FileText,
  Headphones,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Truck,
  UserCheck,
} from "lucide-react";

const businessTypes = [
  "Sole Proprietorship",
  "Partnership Firm",
  "Private Limited Company",
  "LLP (Limited Liability Partnership)",
  "Existing Retailer / Wholesaler",
];

const experienceYears = [
  "Less than 1 Year",
  "1 to 3 Years",
  "3 to 5 Years",
  "5+ Years",
];

export default function BecomeDealerPage() {
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
                <span>Channel Partner Program</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                Partner with us <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">grow your business.</span>
              </h1>

              <p className="max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed font-normal">
                Join our expansive dealer network. Deliver certified quality, high-performance fans, and reliable ventilation solutions to customers in your region.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
                <div className="absolute -top-3 -right-3 rounded-xl bg-cyan-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-md">
                  High Margin
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Dealer Benefits</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  We empower our authorized distributors with direct factory support, competitive trade structures, and complete marketing assistance.
                </p>
                <div className="space-y-3.5 text-xs font-semibold">
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="rounded-lg bg-blue-500/20 p-2 text-cyan-400">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <span>Competitive Commercial Margins</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="rounded-lg bg-blue-500/20 p-2 text-cyan-400">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span>ISO Certified Quality Standards</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY PARTNER WITH US (GRID SECTION)
      ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">Growth Advantage</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1 sm:text-4xl">
              Why Become an Authorized Dealer?
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              We build long-standing relationships with our partners through transparent policies, consistent inventory dispatch, and premier product engineering.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-200 hover:bg-white hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b2f5c] group-hover:bg-[#0b2f5c] group-hover:text-white transition-colors">
                <BadgePercent className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Attractive Trade Margins</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Enjoy lucrative wholesale pricing models designed to optimize your retail profitability and business expansion.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-200 hover:bg-white hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b2f5c] group-hover:bg-[#0b2f5c] group-hover:text-white transition-colors">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Reliable Logistics & Dispatch</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Benefit from robust supply chain management ensuring prompt inventory fulfillment and minimal delivery downtime.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-200 hover:bg-white hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b2f5c] group-hover:bg-[#0b2f5c] group-hover:text-white transition-colors">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Marketing & POS Support</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Receive promotional displays, digital assets, catalogues, and merchandising collateral to boost your showroom visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION FORM SECTION
      ========================================================= */}
      <section id="apply" className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-12 shadow-xl shadow-slate-900/5">
            {!submitted ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-blue-600">Application Form</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                      Dealer Registration Enquiry
                    </h2>
                  </div>
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0b2f5c]">
                    <Building className="h-6 w-6" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Applicant Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Business / Firm Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        placeholder="e.g. Patel Electricals & Hardware"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone / Mobile Number <span className="text-red-500">*</span>
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

                  {/* Row 3: Business Type & Experience */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Business Constitution <span className="text-red-500">*</span>
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
                      <label htmlFor="experience" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Industry Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        defaultValue=""
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      >
                        <option value="" disabled>Select years in business</option>
                        {experienceYears.map((exp) => (
                          <option key={exp} value={exp}>{exp}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Location / Address Details */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        City / Town <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="e.g. Nagpur"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        required
                        placeholder="e.g. Maharashtra"
                        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-[#0b2f5c] focus:ring-4 focus:ring-[#0b2f5c]/10"
                      />
                    </div>
                  </div>

                  {/* Row 5: Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Additional Information / Showroom Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your existing retail setup, current brands handled, or expected volume..."
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
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <span>Submit Dealer Application</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Our channel development team reviews all applications and conducts background verification prior to onboarding.
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
                  Application Received
                </span>

                <h3 className="mt-3 text-3xl font-bold text-slate-900 tracking-tight">
                  Thank you for applying.
                </h3>

                <p className="mt-3 max-w-md text-sm text-slate-600 leading-relaxed font-normal">
                  Your dealer registration form has been logged successfully. Our regional sales manager will review your details and contact you within 2-3 business days.
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
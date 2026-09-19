"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const enquiryTypes = [
  "Product Enquiry",
  "Catalogue Request",
  "Dealer / Distributor Enquiry",
  "Business Enquiry",
  "General Enquiry",
];

const products = [
  "Auro",
  "High Breeze",
  "Avencer",
  "Enticer",
  "Jazz",
  "Fantasy",
  "V130",
  "Not Sure",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this to your backend/API later.
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border bg-secondary">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-container px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-20">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Contact LIMRA
                </p>
              </div>

              <h1 className="mt-6 font-heading text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
                Let&apos;s talk
                <span className="block text-primary">about airflow.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Looking for the right ceiling fan, requesting a catalogue, or
                interested in working with us? Send us your requirements and
                our team can help you find the right direction.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="border-l-2 border-primary pl-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                  Business Enquiries
                </p>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Product enquiries, catalogue requests, dealer and
                  distributor enquiries, and general business communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION + FORM
      ========================================================= */}
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            {/* ===================================================
                CONTACT DETAILS
            =================================================== */}
            <aside>
              <div className="max-w-md">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Get in Touch
                  </p>
                </div>

                <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  We&apos;re here to help.
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
                  Tell us what you are looking for and we&apos;ll help direct
                  your enquiry to the right place.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {/* Address */}
                <div className="rounded-2xl border border-border bg-secondary p-5 sm:p-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Office Address
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                        H.No.10-1-31,
                        <br />
                        Fathe Nagar, Balanagar,
                        <br />
                        Hyderabad, Telangana
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="rounded-2xl border border-border bg-secondary p-5 sm:p-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Phone
                      </p>

                      <p className="mt-2 text-sm font-medium text-foreground">
                        Contact number to be added
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-border bg-secondary p-5 sm:p-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Email
                      </p>

                      <p className="mt-2 text-sm font-medium text-foreground">
                        Email address to be added
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business */}
                <div className="rounded-2xl border border-border bg-secondary p-5 sm:p-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Business Enquiries
                      </p>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Dealer, distributor and business partnership
                        enquiries are welcome.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <p className="text-xs leading-5 text-muted-foreground">
                  Share your requirements clearly so our team can understand
                  your enquiry and respond appropriately.
                </p>
              </div>
            </aside>

            {/* ===================================================
                FORM
            =================================================== */}
            <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8 lg:p-10">
              {!submitted ? (
                <>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Send an Enquiry
                      </p>

                      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Tell us what you need.
                      </h2>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                        Fill in the form below and provide as much relevant
                        information as possible.
                      </p>
                    </div>

                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground sm:flex">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >
                    {/* Name */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                        >
                          Full Name *
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                        >
                          Company
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Company name"
                          className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                        >
                          Email Address *
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                        >
                          Phone Number *
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91"
                          className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                    </div>

                    {/* Enquiry + Product */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="enquiry"
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                        >
                          Enquiry Type *
                        </label>

                        <select
                          id="enquiry"
                          name="enquiry"
                          required
                          defaultValue=""
                          className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                        >
                          <option value="" disabled>
                            Select enquiry type
                          </option>

                          {enquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="product"
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                        >
                          Product / Model
                        </label>

                        <select
                          id="product"
                          name="product"
                          defaultValue=""
                          className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                        >
                          <option value="">
                            Select a model
                          </option>

                          {products.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                      >
                        Message *
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us about your requirements..."
                        className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
                    >
                      Send Enquiry

                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <p className="text-center text-xs leading-5 text-muted-foreground">
                      By submitting this form, you are requesting contact from
                      LIMRA INDUSTRY regarding your enquiry.
                    </p>
                  </form>
                </>
              ) : (
                /* Success state */
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Enquiry Received
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                    Thank you for contacting us.
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                    Your enquiry has been submitted successfully. Our team can
                    review your requirements and get back to you.
                  </p>

                  <Link
                    href="/products"
                    className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-card"
                  >
                    Explore Products

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="border-y border-border bg-secondary py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Our Location
                </p>
              </div>

              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Visit or connect with us.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Our office is located in Fathe Nagar, Balanagar, Hyderabad.
              </p>

              <div className="mt-7 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />

                <p className="text-sm font-medium leading-6 text-foreground">
                  H.No.10-1-31,
                  <br />
                  Fathe Nagar, Balanagar,
                  <br />
                  Hyderabad, Telangana
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border bg-background">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)",
                  backgroundSize: "40px 40px",
                  backgroundPosition:
                    "0 0, 0 20px, 20px -20px, -20px 0px",
                }}
              />

              <div className="relative flex min-h-[320px] flex-col items-center justify-center px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card">
                  <MapPin className="h-6 w-6" />
                </div>

                <p className="mt-5 font-heading text-xl font-bold text-foreground">
                  LIMRA INDUSTRY
                </p>

                <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                  H.No.10-1-31, Fathe Nagar, Balanagar, Hyderabad
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=H.No.10-1-31%2C%20Fathe%20Nagar%2C%20Balanagar%2C%20Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Open in Google Maps

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS ENQUIRY CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                Dealer &amp; Business Enquiries
              </p>

              <h2 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Interested in working with LIMRA?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/70 sm:text-lg">
                Contact our team to discuss dealer, distributor and other
                business requirements.
              </p>
            </div>

            <Link
              href="#enquiry"
              className="group inline-flex w-fit items-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              Start an Enquiry

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Factory,
  Gauge,
  Handshake,
  PhoneCall,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Users,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import FAQ from "@/components/home/FAQ";

const categories = [
  {
    id: "ceiling-fans",
    title: "Ceiling Fans",
    image: "/images/products/demo.png",
    href: "/products/ceiling-fans",
  },
  {
    id: "table-fans",
    title: "Table Fans",
    image: "/images/products/table-fan-01.jpg",
    href: "/products/table-fans",
  },
  {
    id: "pedestal-fans",
    title: "Pedestal Fans",
    image: "/images/products/pedestal-fan-01.jpg",
    href: "/products/pedestal-fans",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Auro",
    category: "Ceiling Fan",
    image: "/images/products/auro.jpg",
    href: "/products?model=Auro",
    tag: "FEATURED",
  },
  {
    id: 2,
    name: "High Breeze",
    category: "Ceiling Fan",
    image: "/images/products/demo.png",
    href: "/products?model=High%20Breeze",
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Avencer",
    category: "Ceiling Fan",
    image: "/images/products/demo.png",
    href: "/products?model=Avencer",
    tag: "PREMIUM",
  },
];

const avencerColors = [
  {
    name: "Viola Blue",
    image: "/images/products/violablue.jpeg",
  },
  {
    name: "Pearl Ivory",
    image: "/images/products/pearlivory.jpeg",
  },
  {
    name: "Baker's Brown",
    image: "/images/products/bakersbrown.jpeg",
  },
  {
    name: "Satin Gold",
    image: "/images/products/satingold.jpeg",
  },
];


const businessBenefits = [
  {
    icon: Factory,
    title: "Factory Direct",
  },
  {
    icon: ShoppingBag,
    title: "Bulk Supply",
  },
  {
    icon: Users,
    title: "Dealer Pricing",
  },
  {
    icon: Truck,
    title: "Pan-India Supply",
  },
];

const WHATSAPP_NUMBER = "910000000000";

function getWhatsAppUrl() {
  const message = encodeURIComponent(
    "Hello LIMRA INDUSTRY, I am interested in wholesale fan pricing."
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function HomePage() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedAvencerColor, setSelectedAvencerColor] = useState(0);


  return (
    <main className="min-h-screen bg-white text-slate-900">
    
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="order-2 lg:order-1">
            <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0b2f5c]">
              For Dealers & Wholesale
            </span>

            <h1 className="max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-[#07192f] sm:text-4xl lg:text-5xl">
              Premium Fans.
              <br />
              <span className="text-[#0b5cab]">Wholesale Supply.</span>
            </h1>

            <p className="mt-5 max-w-md text-base font-medium text-slate-600">
              Ceiling, table and pedestal fans for dealers, distributors and
              bulk buyers.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0b2f5c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#07192f]"
              >
                View Products
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                onClick={() => setShowEnquiry(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#0b2f5c] transition hover:border-[#0b2f5c]"
              >
                Wholesale Price
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              <span>✓ Factory Direct</span>
              <span>✓ Bulk Orders</span>
              <span>✓ Dealer Supply</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute inset-8 rounded-full bg-blue-200/50 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
                <img
                  src="/images/products/demo.png"
                  alt="LIMRA Auro Ceiling Fan"
                  className="h-[340px] w-full object-cover sm:h-[440px]"
                />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Featured Model
                    </p>
                    <p className="text-xl font-black text-[#0b2f5c]">
                      Auro
                    </p>
                  </div>

                  <Link
                    href="/products?model=Auro"
                    className="rounded-lg bg-[#0b2f5c] px-4 py-2 text-xs font-bold text-white"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* =====================================================
    PRODUCT HIGHLIGHTS
===================================================== */}
<section className="border-y border-slate-200 bg-white py-14 sm:py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* SECTION HEADER */}
    <div className="mb-8 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b5cab]">
        Avencer Prime
      </p>

      <h2 className="mt-2 text-3xl font-black tracking-tight text-[#07192f] sm:text-4xl">
        Built for Performance
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
        A premium 1200 mm decorative ceiling fan designed for strong airflow,
        reliable performance and everyday use.
      </p>
    </div>


    {/* HIGHLIGHTS */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* AIRFLOW */}
      <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
          <Wind className="h-6 w-6" />
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Airflow
        </p>

        <p className="mt-1 text-2xl font-black text-[#07192f]">
          207 CFM
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Powerful air delivery
        </p>
      </div>


      {/* SPEED */}
      <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
          <Gauge className="h-6 w-6" />
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Motor Speed
        </p>

        <p className="mt-1 text-2xl font-black text-[#07192f]">
          380 RPM
        </p>

        <p className="mt-1 text-xs text-slate-500">
          High-speed performance
        </p>
      </div>


      {/* MOTOR */}
      <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
          <Zap className="h-6 w-6" />
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Power Usage
        </p>

        <p className="mt-1 text-2xl font-black text-[#07192f]">
          70 W
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Efficient operation
        </p>
      </div>


      {/* WARRANTY */}
      <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
          <ShieldCheck className="h-6 w-6" />
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Warranty
        </p>

        <p className="mt-1 text-2xl font-black text-[#07192f]">
          2 Years
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Warranty coverage
        </p>
      </div>

    </div>


    {/* PRODUCT DETAILS STRIP */}
    <div className="mt-5 grid gap-4 rounded-2xl border border-slate-200 bg-[#07192f] p-5 sm:grid-cols-3 sm:p-6">

      <div className="text-center sm:border-r sm:border-white/10">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
          Size
        </p>

        <p className="mt-1 text-sm font-black text-white">
          1200 mm / 48"
        </p>
      </div>


      <div className="text-center sm:border-r sm:border-white/10">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
          Body
        </p>

        <p className="mt-1 text-sm font-black text-white">
          Aluminium
        </p>
      </div>


      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
          Motor Winding
        </p>

        <p className="mt-1 text-sm font-black text-white">
          Aluminium
        </p>
      </div>

    </div>

  </div>
</section>


{/* =====================================================
    FEATURED PRODUCT — AVENCER PRIME
===================================================== */}
<section className="bg-slate-50 py-14 sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* =================================================
        SECTION HEADER
    ================================================= */}
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#0b5cab]">
          Featured Model
        </p>

        <h2 className="mt-1 text-3xl font-black tracking-tight text-[#07192f] sm:text-4xl">
          Avencer Prime
        </h2>
      </div>

      <Link
        href="/products"
        className="hidden items-center gap-1 text-sm font-bold text-[#0b2f5c] sm:flex"
      >
        View All Products
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>


    {/* =================================================
        PRODUCT CARD
    ================================================= */}
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="grid lg:grid-cols-2">


        {/* =================================================
            PRODUCT IMAGE AREA
        ================================================= */}
        <div className="bg-white p-4 sm:p-6 lg:p-8">

          {/* =============================================
              MAIN IMAGE
          ============================================= */}
          <Link
            href="/products?model=Avencer%20Prime"
            className="group relative block aspect-square overflow-hidden rounded-2xl bg-slate-100"
          >
            <img
              src={avencerColors[selectedAvencerColor].image}
              alt={`Avencer Prime - ${avencerColors[selectedAvencerColor].name}`}
              className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
            />

            {/* PRODUCT TAG */}
            <span className="absolute left-4 top-4 rounded-md bg-[#0b2f5c] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">
              Featured Model
            </span>
          </Link>


          {/* =============================================
              COLOR SELECTOR
          ============================================= */}
          <div className="mt-5">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Colour
                </p>

                <p className="mt-1 text-sm font-black text-[#07192f]">
                  {avencerColors[selectedAvencerColor].name}
                </p>
              </div>

              <span className="text-xs font-medium text-slate-400">
                {avencerColors.length} Colours
              </span>
            </div>


            {/* =========================================
                THUMBNAILS
            ========================================= */}
            <div className="mt-3 flex gap-3 overflow-x-auto pb-1">

              {avencerColors.map((color, index) => {
                const isSelected =
                  selectedAvencerColor === index;

                return (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() =>
                      setSelectedAvencerColor(index)
                    }
                    aria-label={`Select ${color.name}`}
                    aria-pressed={isSelected}
                    className={`group shrink-0 rounded-xl border-2 bg-white p-1 transition-all duration-200 ${
                      isSelected
                        ? "border-[#0b2f5c] shadow-md"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-slate-100 sm:h-24 sm:w-24">

                      <img
                        src={color.image}
                        alt={color.name}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      />

                    </div>
                  </button>
                );
              })}

            </div>


            {/* COLOR NAMES */}
            <div className="mt-3 grid grid-cols-4 gap-2">

              {avencerColors.map((color, index) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() =>
                    setSelectedAvencerColor(index)
                  }
                  className={`text-center text-[10px] font-bold leading-tight transition ${
                    selectedAvencerColor === index
                      ? "text-[#0b2f5c]"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {color.name}
                </button>
              ))}

            </div>

          </div>

        </div>


        {/* =================================================
            PRODUCT INFORMATION
        ================================================= */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

          {/* CATEGORY */}
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Decorative Ceiling Fan
          </p>


          {/* PRODUCT NAME */}
          <h3 className="mt-2 text-3xl font-black tracking-tight text-[#07192f] sm:text-4xl">
            Avencer Prime
          </h3>


          {/* SIZE */}
          <p className="mt-2 text-sm font-semibold text-slate-500">
            1200 mm / 48 inch
          </p>


          {/* =================================================
              PRODUCT FEATURES
          ================================================= */}
          <div className="mt-7 grid grid-cols-2 gap-3">

            {/* AIRFLOW */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Airflow
              </p>

              <p className="mt-1 text-lg font-black text-[#07192f]">
                207 CFM
              </p>
            </div>


            {/* MOTOR SPEED */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Motor Speed
              </p>

              <p className="mt-1 text-lg font-black text-[#07192f]">
                380 RPM
              </p>
            </div>


            {/* POWER */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Power Usage
              </p>

              <p className="mt-1 text-lg font-black text-[#07192f]">
                70 W
              </p>
            </div>


            {/* BLADES */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Blades
              </p>

              <p className="mt-1 text-lg font-black text-[#07192f]">
                3 Blades
              </p>
            </div>

          </div>


          {/* =================================================
              MATERIAL + WINDING
          ================================================= */}
          <div className="mt-4 grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Body Material
              </p>

              <p className="mt-1 text-sm font-black text-[#07192f]">
                Aluminium
              </p>
            </div>


            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Motor
              </p>

              <p className="mt-1 text-sm font-black text-[#07192f]">
                Aluminium Winding
              </p>
            </div>

          </div>


          {/* =================================================
              WARRANTY
          ================================================= */}
          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#0b2f5c]">
            <ShieldCheck className="h-5 w-5" />

            <span>
              2 Year Warranty
            </span>
          </div>


          {/* =================================================
              ACTIONS
          ================================================= */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/products?model=Avencer%20Prime"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0b2f5c] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#07192f]"
            >
              View Product

              <ArrowRight className="h-4 w-4" />
            </Link>


            <button
              type="button"
              onClick={() => setShowEnquiry(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#0b2f5c] px-5 py-3.5 text-sm font-bold text-[#0b2f5c] transition hover:bg-[#0b2f5c] hover:text-white"
            >
              Get Wholesale Price
            </button>

          </div>

        </div>

      </div>
    </div>
  </div>
</section>

{/* =====================================================
    WHOLESALE ENQUIRY SECTION
===================================================== */}
<section
  id="wholesale-enquiry"
  className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white py-16 sm:py-24"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

      {/* LEFT: VALUE PROPOSITION */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#0b5cab]">
            <Factory className="h-3.5 w-3.5" />
            B2B Procurement Portal
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#07192f] sm:text-4xl lg:text-5xl leading-tight">
            Get Direct Wholesale Pricing
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Scale your retail or distribution business with factory-direct margins. Submit your requirements and our B2B desk will share custom price lists within 2 hours.
          </p>
        </div>

        {/* FEATURE HIGHLIGHTS GRID */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm transition hover:border-blue-300 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
              <Factory className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-black text-[#07192f]">
              Factory Direct
            </p>
            <p className="mt-0.5 text-xs text-slate-500">Zero middleman markup</p>
          </div>

          <div className="group rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm transition hover:border-blue-300 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-black text-[#07192f]">
              Bulk Orders
            </p>
            <p className="mt-0.5 text-xs text-slate-500">Flexible tier discounts</p>
          </div>

          <div className="group rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm transition hover:border-blue-300 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
              <Users className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-black text-[#07192f]">
              Dealer Support
            </p>
            <p className="mt-0.5 text-xs text-slate-500">Regional protection</p>
          </div>

          <div className="group rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm transition hover:border-blue-300 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
              <Truck className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-black text-[#07192f]">
              Pan-India Supply
            </p>
            <p className="mt-0.5 text-xs text-slate-500">Safe transit dispatch</p>
          </div>
        </div>
      </div>

      {/* RIGHT: PROFESSIONAL ENQUIRY FORM */}
      <div className="lg:col-span-7">
        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          <div className="absolute top-0 right-0 -mt-3 -mr-3 hidden sm:block rounded-full bg-blue-600 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
            Fast Quote Reply
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Wholesale enquiry submitted");
              alert("Enquiry submitted successfully! Our wholesale team will contact you shortly.");
            }}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0b2f5c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* WHATSAPP */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600"
                >
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0b2f5c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* PRODUCT */}
              <div>
                <label
                  htmlFor="product"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600"
                >
                  Product Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="product"
                  name="product"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#0b2f5c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select fan category
                  </option>
                  <option value="ceiling-fans">Ceiling Fans (High-Speed & Decorative)</option>
                  <option value="table-fans">Table Fans (Portable Airflow)</option>
                  <option value="pedestal-fans">Pedestal Fans (Heavy-Duty)</option>
                </select>
              </div>

              {/* QUANTITY */}
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600"
                >
                  Approx. Quantity (Units) <span className="text-red-500">*</span>
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  required
                  placeholder="e.g. 50 units"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0b2f5c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* LOCATION */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600"
                >
                  Delivery Destination (City / State) <span className="text-red-500">*</span>
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="e.g. Pune, Maharashtra"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#0b2f5c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b2f5c] px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#07192f] hover:scale-[1.01]"
            >
              Get Wholesale Price Sheet
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-center text-xs text-slate-400">
              🔒 Your details are safe with us. No spam, direct dealer correspondence only.
            </p>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

{/* =====================================================
    B2B BENEFITS MATRIX
===================================================== */}
<section className="border-b border-slate-200 bg-slate-50/60 py-12">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {businessBenefits.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Guaranteed
              </span>
              <h3 className="text-sm font-black text-[#07192f] mt-0.5">
                {item.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* =====================================================
          WHOLESALE CTA
      ====================================================== */}
      <section className="bg-[#07192f] py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b2f5c] to-[#0b5cab] p-7 text-center shadow-2xl sm:p-12">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Dealers • Distributors • Wholesalers
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Get Wholesale Pricing
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm text-blue-100">
              Tell us what you need and our team will contact you.
            </p>

            <button
              onClick={() => setShowEnquiry(true)}
              className="mt-7 rounded-lg bg-white px-7 py-3.5 text-sm font-black text-[#0b2f5c] shadow-lg transition hover:bg-slate-100"
            >
              Send Wholesale Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEALER CTA
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-black text-[#07192f]">
              Want to become a LIMRA dealer?
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Join our dealer network.
            </p>
          </div>

          <Link
            href="/dealers"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0b2f5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#07192f]"
          >
            Apply for Dealership
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

<FAQ />
  

  
     
    </main>
  );
}
"use client";

import { Link } from "../../lib/navigation";
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
import { useTranslations } from "next-intl";
import FAQ from "@/components/home/FAQ";
import WholesaleEnquiry from "@/components/home/WholesaleEnquiry";

const categories = [
  {
    id: "ceiling-fans",
    titleKey: "ceilingFans",
    image: "/images/products/hero.png",
    href: "/products/ceiling-fans",
  },
  {
    id: "table-fans",
    titleKey: "tableFans",
    image: "/images/products/table-fan-01.jpg",
    href: "/products/table-fans",
  },
  {
    id: "pedestal-fans",
    titleKey: "pedestalFans",
    image: "/images/products/pedestal-fan-01.jpg",
    href: "/products/pedestal-fans",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Auro",
    categoryKey: "ceilingFan",
    image: "/images/products/auro.jpg",
    href: "/products?model=Auro",
    tagKey: "featured",
  },
  {
    id: 2,
    name: "High Breeze",
    categoryKey: "ceilingFan",
    image: "/images/products/hero.png",
    href: "/products?model=High%20Breeze",
    tagKey: "popular",
  },
  {
    id: 3,
    name: "Avencer",
    categoryKey: "ceilingFan",
    image: "/images/products/hero.png",
    href: "/products?model=Avencer",
    tagKey: "premium",
  },
];

const avencerColors = [
  {
    nameKey: "violaBlue",
    image: "/images/products/violablue.jpeg",
  },
  {
    nameKey: "pearlIvory",
    image: "/images/products/pearlivory.jpeg",
  },
  {
    nameKey: "bakersBrown",
    image: "/images/products/bakersbrown.jpeg",
  },
  {
    nameKey: "satinGold",
    image: "/images/products/satingold.jpeg",
  },
];


const businessBenefits = [
  {
    icon: Factory,
    titleKey: "factoryDirect",
  },
  {
    icon: ShoppingBag,
    titleKey: "bulkSupply",
  },
  {
    icon: Users,
    titleKey: "dealerPricing",
  },
  {
    icon: Truck,
    titleKey: "panIndiaSupply",
  },
];

const WHATSAPP_NUMBER = "918919854467";

function getWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export default function HomePage() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedAvencerColor, setSelectedAvencerColor] = useState(0);
  const t = useTranslations("Home");
  const categoryLabel = (key: string) => t(`categories.${key}`);


  return (
    <main className="min-h-screen bg-white text-slate-900">
    
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="order-2 lg:order-1">
            <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0b2f5c]">
              {t("hero.badge")}
            </span>

            <h1 className="max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-[#07192f] sm:text-4xl lg:text-5xl">
              {t("hero.title")}
              <br />
              <span className="text-[#0b5cab]">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="mt-5 max-w-md text-base font-medium text-slate-600">
              {t("hero.description")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0b2f5c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#07192f]"
              >
                {t("hero.viewProducts")}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                onClick={() => setShowEnquiry(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#0b2f5c] transition hover:border-[#0b2f5c]"
              >
                {t("hero.wholesalePrice")}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              <span>✓ {t("hero.factoryDirect")}</span>
              <span>✓ {t("hero.bulkOrders")}</span>
              <span>✓ {t("hero.dealerSupply")}</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute inset-8 rounded-full bg-blue-200/50 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
                <img
                  src="/images/products/hero.png"
                  alt={t("hero.imageAlt")}
                  className="h-[340px] w-full object-cover sm:h-[440px]"
                />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {t("featuredModel")}
                    </p>
                    <p className="text-xl font-black text-[#0b2f5c]">
                      Auro
                    </p>
                  </div>

                  <Link
                    href="/products?model=Auro"
                    className="rounded-lg bg-[#0b2f5c] px-4 py-2 text-xs font-bold text-white"
                  >
                    {t("view")}
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
        {t("featuredProduct.name")}
      </p>

      <h2 className="mt-2 text-3xl font-black tracking-tight text-[#07192f] sm:text-4xl">
        {t("highlights.title")}
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
        {t("highlights.description")}
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
          {t("specs.airflow")}
        </p>

        <p className="mt-1 text-2xl font-black text-[#07192f]">
          207 CFM
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {t("specs.airflowDesc")}
        </p>
      </div>


      {/* SPEED */}
      <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
          <Gauge className="h-6 w-6" />
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          {t("specs.motorSpeed")}
        </p>

        <p className="mt-1 text-2xl font-black text-[#07192f]">
          380 RPM
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {t("specs.motorSpeedDesc")}
        </p>
      </div>


      {/* MOTOR */}
      <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
          <Zap className="h-6 w-6" />
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          {t("specs.powerUsage")}
        </p>

        <p className="mt-1 text-2xl font-black text-[#07192f]">
          70 W
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {t("specs.powerUsageDesc")}
        </p>
      </div>


      {/* WARRANTY */}
      <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0b5cab] transition group-hover:bg-[#0b2f5c] group-hover:text-white">
          <ShieldCheck className="h-6 w-6" />
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          {t("specs.warranty")}
        </p>

        <p className="mt-1 text-2xl font-black text-[#07192f]">
          {t("specs.twoYears")}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {t("specs.warranty")} coverage
        </p>
      </div>

    </div>


    {/* PRODUCT DETAILS STRIP */}
    <div className="mt-5 grid gap-4 rounded-2xl border border-slate-200 bg-[#07192f] p-5 sm:grid-cols-3 sm:p-6">

      <div className="text-center sm:border-r sm:border-white/10">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
          {t("specs.size")}
        </p>

        <p className="mt-1 text-sm font-black text-white">
          1200 mm / 48"
        </p>
      </div>


      <div className="text-center sm:border-r sm:border-white/10">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
          {t("specs.body")}
        </p>

        <p className="mt-1 text-sm font-black text-white">
          Aluminium
        </p>
      </div>


      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
          {t("specs.motorWinding")}
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
<section className="bg-slate-50 py-10 sm:py-14 lg:py-20">
  <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

    {/* SECTION HEADER */}
    <div className="mb-6 flex items-end justify-between sm:mb-8">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b5cab] sm:text-xs">
          {t("featuredModel")}
        </p>

        <h2 className="mt-1 text-2xl font-black tracking-tight text-[#07192f] sm:text-3xl lg:text-4xl">
          {t("featuredProduct.name")}
        </h2>
      </div>

      <Link
        href="/products"
        className="hidden items-center gap-1 text-sm font-bold text-[#0b2f5c] sm:flex"
      >
        {t("view")} All Products
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    {/* PRODUCT CARD */}
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">

      <div className="grid lg:grid-cols-2">

        {/* =================================================
            PRODUCT IMAGE AREA
        ================================================= */}
        <div className="p-3 sm:p-6 lg:p-8">

          {/* MAIN IMAGE */}
          <Link
            href="/products?model=Avencer%20Prime"
            className="group relative block aspect-square overflow-hidden rounded-xl bg-slate-100 sm:rounded-2xl"
          >
            <img
              src={avencerColors[selectedAvencerColor].image}
              alt={`${t("featuredProduct.name")} - ${t(`featuredProduct.colors.${avencerColors[selectedAvencerColor].nameKey}`)}`}
              className="h-full w-full bg-white object-contain transition duration-500 group-hover:scale-[1.03]"
            />

            <span className="absolute left-3 top-3 rounded-md bg-[#0b2f5c] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px]">
              {t("featuredModel")}
            </span>
          </Link>

          {/* COLOR SELECTOR */}
          <div className="mt-4 sm:mt-5">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
                  {t("featuredProduct.colour")}
                </p>

                <p className="mt-0.5 text-xs font-black text-[#07192f] sm:mt-1 sm:text-sm">
                  {t(`featuredProduct.colors.${avencerColors[selectedAvencerColor].nameKey}`)}
                </p>
              </div>

              <span className="text-[10px] font-medium text-slate-400 sm:text-xs">
                {avencerColors.length} {t("featuredProduct.colour")}s
              </span>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1 sm:mt-3 sm:gap-3">

              {avencerColors.map((color, index) => {
                const isSelected =
                  selectedAvencerColor === index;

                return (
                  <button
                    key={t(`featuredProduct.colors.${color.nameKey}`)}
                    type="button"
                    onClick={() =>
                      setSelectedAvencerColor(index)
                    }
                    aria-label={`Select ${t(`featuredProduct.colors.${color.nameKey}`)}`}
                    aria-pressed={isSelected}
                    className={`shrink-0 rounded-lg border-2 bg-white p-1 transition-all duration-200 sm:rounded-xl ${
                      isSelected
                        ? "border-[#0b2f5c] shadow-md"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-md bg-slate-100 sm:h-20 sm:w-20">
                      <img
                        src={color.image}
                        alt={t(`featuredProduct.colors.${color.nameKey}`)}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </button>
                );
              })}

            </div>

            {/* COLOR NAMES */}
            <div className="mt-2 grid grid-cols-4 gap-1.5 sm:mt-3 sm:gap-2">
              {avencerColors.map((color, index) => (
                <button
                  key={t(`featuredProduct.colors.${color.nameKey}`)}
                  type="button"
                  onClick={() =>
                    setSelectedAvencerColor(index)
                  }
                  className={`text-center text-[9px] font-bold leading-tight sm:text-[10px] ${
                    selectedAvencerColor === index
                      ? "text-[#0b2f5c]"
                      : "text-slate-500"
                  }`}
                >
                  {t(`featuredProduct.colors.${color.nameKey}`)}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* =================================================
            PRODUCT INFORMATION
        ================================================= */}
        <div className="flex flex-col justify-center border-t border-slate-100 p-4 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

          {/* CATEGORY */}
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 sm:text-xs sm:tracking-widest">
            {t("featuredProduct.category")}
          </p>

          {/* PRODUCT NAME */}
          <h3 className="mt-1 text-2xl font-black tracking-tight text-[#07192f] sm:mt-2 sm:text-4xl">
            {t("featuredProduct.name")}
          </h3>

          {/* SIZE */}
          <p className="mt-1 text-xs font-semibold text-slate-500 sm:mt-2 sm:text-sm">
            {t("featuredProduct.size")}
          </p>

          {/* PRODUCT FEATURES */}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:gap-3">

            <div className="rounded-lg bg-slate-50 p-3 sm:rounded-xl sm:p-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                {t("specs.airflow")}
              </p>

              <p className="mt-0.5 text-base font-black text-[#07192f] sm:mt-1 sm:text-lg">
                207 CFM
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-3 sm:rounded-xl sm:p-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                {t("specs.motorSpeed")}
              </p>

              <p className="mt-0.5 text-base font-black text-[#07192f] sm:mt-1 sm:text-lg">
                380 RPM
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-3 sm:rounded-xl sm:p-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                {t("specs.powerUsage")}
              </p>

              <p className="mt-0.5 text-base font-black text-[#07192f] sm:mt-1 sm:text-lg">
                70 W
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-3 sm:rounded-xl sm:p-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                {t("featuredProduct.blades")}
              </p>

              <p className="mt-0.5 text-base font-black text-[#07192f] sm:mt-1 sm:text-lg">
                3 {t("featuredProduct.blades")}
              </p>
            </div>

          </div>

          {/* MATERIAL + WINDING */}
          <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">

            <div className="rounded-lg border border-slate-200 p-3 sm:rounded-xl sm:p-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                {t("specs.body")} Material
              </p>

              <p className="mt-0.5 text-xs font-black text-[#07192f] sm:mt-1 sm:text-sm">
                Aluminium
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-3 sm:rounded-xl sm:p-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                Motor
              </p>

              <p className="mt-0.5 text-xs font-black text-[#07192f] sm:mt-1 sm:text-sm">
                {t("featuredProduct.aluminiumWinding")}
              </p>
            </div>

          </div>

          {/* WARRANTY */}
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#0b2f5c] sm:mt-5 sm:text-sm">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />

            <span>
              2 Year {t("specs.warranty")}
            </span>
          </div>

          {/* ACTIONS */}
          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">

            <Link
              href="/products?model=Avencer%20Prime"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0b2f5c] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#07192f] sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-sm"
            >
              {t("view")} Product
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={() => setShowEnquiry(true)}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#0b2f5c] px-4 py-3 text-xs font-bold text-[#0b2f5c] transition hover:bg-[#0b2f5c] hover:text-white sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-sm"
            >
              Get {t("hero.wholesalePrice")}
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
  className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white"
>
  <WholesaleEnquiry />
</section>

{/* =====================================================
    B2B BENEFITS MATRIX
===================================================== */}
{/* =====================================================
    B2B BENEFITS
===================================================== */}
<section className="border-b border-slate-200 bg-white py-12 sm:py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Section heading */}
    <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b5cab] sm:text-xs">
          {t("business.eyebrow")}
        </p>

        <h2 className="mt-1 text-2xl font-black tracking-tight text-[#07192f] sm:text-3xl">
          {t("business.title")}
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
        {t("business.description")}
      </p>
    </div>

    {/* Benefits */}
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">

        {businessBenefits.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={t(`business.benefits.${item.titleKey}`)}
              className={`group relative p-6 transition-all duration-300 hover:bg-slate-50 sm:p-7 lg:p-8 ${
                index !== 0
                  ? "border-t border-slate-200 sm:border-l sm:border-t-0"
                  : ""
              } ${
                index === 2
                  ? "lg:border-l"
                  : ""
              }`}
            >

              {/* Number */}
              <span className="absolute right-5 top-5 text-[10px] font-black tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-blue-100">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-[#0b5cab] ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-[#0b2f5c] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#0b2f5c]/10">
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="mt-5">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {t("business.forBusiness")}
                </p>

                <h3 className="mt-1.5 text-base font-black text-[#07192f]">
                  {t(`business.benefits.${item.titleKey}`)}
                </h3>

                <div className="mt-4 h-px w-8 bg-[#0b5cab] transition-all duration-300 group-hover:w-14" />

              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0b2f5c] transition-all duration-300 group-hover:w-full" />

            </div>
          );
        })}

      </div>
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
              {t("wholesaleCta.eyebrow")}
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {t("wholesaleCta.title")}
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm text-blue-100">
              {t("wholesaleCta.description")}
            </p>

            <button
              onClick={() => setShowEnquiry(true)}
              className="mt-7 rounded-lg bg-white px-7 py-3.5 text-sm font-black text-[#0b2f5c] shadow-lg transition hover:bg-slate-100"
            >
              {t("wholesaleCta.button")}
            </button>
          </div>
        </div>
      </section>

    {/* =====================================================
    DEALER CTA
====================================================== */}
<section className="border-b border-slate-200 bg-slate-50 py-10 sm:py-14">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">

      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-50/80 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-slate-100 blur-3xl" />

        <div className="absolute right-0 top-0 h-full w-1/3 opacity-40">
          <svg
            viewBox="0 0 400 300"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M400 0H260L400 140V0Z"
              fill="currentColor"
              className="text-slate-100"
            />
            <path
              d="M400 80L180 300H320L400 220V80Z"
              fill="currentColor"
              className="text-slate-50"
            />
            <path
              d="M400 180L280 300H400V180Z"
              fill="currentColor"
              className="text-slate-100"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-9">

        {/* Left */}
        <div className="max-w-2xl">

          {/* Small label */}
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0b5cab]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b5cab] sm:text-xs">
              {t("dealerCta.eyebrow")}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-black tracking-tight text-[#07192f] sm:text-3xl lg:text-4xl">
            {t("dealerCta.title")}{" "}
            <span className="text-[#0b5cab]">
              LIMRA
            </span>
          </h2>

          {/* Description */}
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:mt-3">
            Become a LIMRA dealer and connect your business with our
            growing fan distribution network.
          </p>

          {/* Benefits */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[#0b5cab]">
                ✓
              </span>
              {t("dealerCta.dealerSupport")}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[#0b5cab]">
                ✓
              </span>
              {t("dealerCta.businessOpportunities")}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[#0b5cab]">
                ✓
              </span>
              {t("dealerCta.directEnquiry")}
            </div>

          </div>
        </div>

        {/* Right CTA */}
        <div className="shrink-0">

          <Link
            href="/dealers"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#0b2f5c] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0b2f5c]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#07192f] hover:shadow-xl sm:w-auto sm:px-7"
          >
            <span>
              {t("dealerCta.button")}
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <p className="mt-2 text-center text-[10px] font-medium text-slate-400">
            {t("dealerCta.note")}
          </p>

        </div>

      </div>
    </div>
  </div>
</section>

<FAQ />
  

  
     
    </main>
  );
}
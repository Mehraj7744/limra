"use client";

import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  ChevronDown,
  Fan,
  Wind,
  ShieldCheck,
  Globe,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

const WHATSAPP_NUMBER = "910000000000";

const getGeneralWhatsAppUrl = () => {
  const message = encodeURIComponent(
    "Hello LIMRA INDUSTRY, I would like to enquire about your ceiling, table and pedestal fans."
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "te", label: "తెలుగు" },
  { code: "ur", label: "اردو" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MENUS ON ROUTE CHANGE
  ===================================================== */

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    setIsBusinessOpen(false);
    setIsMobileBusinessOpen(false);
    setIsLanguageOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  /* =====================================================
     ACTIVE NAVIGATION
  ===================================================== */

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  const isBusinessActive =
    pathname.startsWith("/wholesale") || pathname.startsWith("/dealers");

  const navItemClass = (path: string) =>
    `rounded-lg px-3.5 py-2 text-sm font-bold tracking-tight transition-all duration-200 ${
      isActive(path)
        ? "bg-blue-50 text-[#0b2f5c] shadow-sm"
        : "text-slate-600 hover:bg-slate-50 hover:text-[#0b2f5c]"
    }`;

  const businessNavClass = () =>
    `inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-bold tracking-tight transition-all duration-200 ${
      isBusinessActive
        ? "bg-blue-50 text-[#0b2f5c] shadow-sm"
        : "text-slate-600 hover:bg-slate-50 hover:text-[#0b2f5c]"
    }`;

  const currentLanguageLabel =
    languages.find((item) => item.code === language)?.label || "English";

  return (
    <>
      {/* =====================================================
          TOP INFORMATION BAR
      ===================================================== */}

      <div className="border-b border-slate-800 bg-[#07192f] px-4 py-2 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* LEFT INFORMATION */}

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-bold tracking-wider text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              LIMRA INDUSTRY
            </span>

            <span className="hidden text-slate-600 sm:inline">
              |
            </span>

            <span className="hidden font-medium text-slate-300 sm:inline">
              ISO 9001:2015 Certified Manufacturer
            </span>
          </div>

          {/* RIGHT QUICK ACTIONS */}

          <div className="flex items-center gap-4 sm:gap-6">
            {/* PHONE */}

            <a
              href="tel:+910000000000"
              className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-cyan-400" />

              <span className="hidden font-medium sm:inline">
                +91 00000 00000
              </span>

              <span className="font-medium sm:hidden">
                Call
              </span>
            </a>

            {/* WHATSAPP */}

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <WhatsappIcon className="h-3.5 w-3.5" />

              <span className="font-semibold">
                WhatsApp Inquiry
              </span>
            </a>

            {/* LANGUAGE */}

            <div className="relative hidden border-l border-slate-800 pl-4 lg:block">
              <button
                type="button"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
              >
                <Globe className="h-3.5 w-3.5 text-slate-400" />

                <span className="font-medium">
                  {currentLanguageLabel}
                </span>

                <ChevronDown
                  className={`h-3 w-3 transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 top-7 z-[100] w-36 overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 text-sm shadow-2xl">
                  {languages.map((item) => (
                    <button
                      type="button"
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`block w-full px-3 py-2 text-left text-xs font-semibold transition-colors ${
                        language === item.code
                          ? "bg-blue-50 text-[#0b2f5c]"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN STICKY HEADER
      ===================================================== */}

      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200 py-2.5 shadow-lg shadow-slate-900/5"
            : "border-b border-slate-200 py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="group shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2f5c]"
            aria-label="LIMRA INDUSTRY Homepage"
          >
            <Image
              src="/images/brand/Limra-logo.jpeg"
              alt="LIMRA Industry Logo"
              width={160}
              height={44}
              priority
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden shrink-0 items-center space-x-1 lg:flex xl:space-x-2">
            {/* HOME */}

            <Link href="/" className={navItemClass("/")}>
              Home
            </Link>

            {/* =================================================
                PRODUCTS DROPDOWN
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link
                href="/products"
                className={`${navItemClass(
                  "/products"
                )} inline-flex items-center gap-1.5`}
              >
                <span>Products</span>

                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {isProductsOpen && (
                <div className="absolute left-0 top-full z-50 mt-1.5 w-72 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 shadow-2xl shadow-slate-900/10">
                  <div className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Fan Product Lines
                  </div>

                  <div className="space-y-1">
                    {/* ALL PRODUCTS */}

                    <Link
                      href="/products"
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0b2f5c]"
                    >
                      <span>All Product Catalog</span>

                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                    </Link>

                    {/* CEILING FANS */}

                    <Link
                      href="/products?category=ceiling-fans"
                      className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-blue-50"
                    >
                      <div className="rounded-lg bg-blue-100 p-2 text-[#0b2f5c] transition-colors group-hover:bg-[#0b2f5c] group-hover:text-white">
                        <Fan className="h-4 w-4" />
                      </div>

                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Ceiling Fans
                        </div>

                        <div className="text-[11px] text-slate-500">
                          High speed & luxury models
                        </div>
                      </div>
                    </Link>

                    {/* TABLE FANS */}

                    <Link
                      href="/products?category=table-fans"
                      className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-blue-50"
                    >
                      <div className="rounded-lg bg-blue-100 p-2 text-[#0b2f5c] transition-colors group-hover:bg-[#0b2f5c] group-hover:text-white">
                        <Wind className="h-4 w-4" />
                      </div>

                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Table Fans
                        </div>

                        <div className="text-[11px] text-slate-500">
                          Compact high-airflow units
                        </div>
                      </div>
                    </Link>

                    {/* PEDESTAL FANS */}

                    <Link
                      href="/products?category=pedestal-fans"
                      className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-blue-50"
                    >
                      <div className="rounded-lg bg-blue-100 p-2 text-[#0b2f5c] transition-colors group-hover:bg-[#0b2f5c] group-hover:text-white">
                        <ShieldCheck className="h-4 w-4" />
                      </div>

                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Pedestal Fans
                        </div>

                        <div className="text-[11px] text-slate-500">
                          Heavy-duty commercial breeze
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT */}

            <Link href="/about" className={navItemClass("/about")}>
              About Us
            </Link>

            {/* =================================================
                BUSINESS DROPDOWN
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setIsBusinessOpen(true)}
              onMouseLeave={() => setIsBusinessOpen(false)}
            >
              <button
                type="button"
                className={businessNavClass()}
                aria-haspopup="true"
                aria-expanded={isBusinessOpen}
              >
                <span>Business</span>

                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    isBusinessOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isBusinessOpen && (
                <div className="absolute left-0 top-full z-50 mt-1.5 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
                  {/* DROPDOWN HEADER */}

                  <div className="flex items-center gap-2 px-3 py-2">
                    <BriefcaseBusiness className="h-3.5 w-3.5 text-slate-400" />

                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Business Opportunities
                    </span>
                  </div>

                  {/* WHOLESALE */}

                  <Link
                    href="/wholesale"
                    className={`group block rounded-xl px-3.5 py-3 transition-colors ${
                      isActive("/wholesale")
                        ? "bg-blue-50"
                        : "hover:bg-blue-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-slate-900">
                        Wholesale
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <div className="mt-0.5 text-[11px] text-slate-500">
                      Bulk orders & wholesale pricing
                    </div>
                  </Link>

                  {/* DEALER */}

                  <Link
                    href="/dealers"
                    className={`group mt-1 block rounded-xl px-3.5 py-3 transition-colors ${
                      isActive("/dealers")
                        ? "bg-blue-50"
                        : "hover:bg-blue-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-slate-900">
                        Become a Dealer
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <div className="mt-0.5 text-[11px] text-slate-500">
                      Join the LIMRA dealer network
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* CONTACT */}

            <Link href="/contact" className={navItemClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-xl bg-[#0b2f5c] px-5 py-3 text-xs font-bold tracking-wide text-white shadow-md shadow-blue-900/20 transition-all hover:bg-[#07192f] hover:shadow-blue-900/30"
            >
              Get a Quote
            </Link>
          </div>

          {/* =================================================
              MOBILE CONTROLS
          ================================================= */}

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0b2f5c]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {isMobileMenuOpen && (
          <div className="absolute inset-x-0 top-full border-b border-slate-200 bg-white px-4 pb-6 pt-4 shadow-2xl lg:hidden">
            <div className="space-y-1.5">
              {/* HOME */}

              <Link
                href="/"
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  isActive("/")
                    ? "bg-blue-50 text-[#0b2f5c]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              {/* =================================================
                  MOBILE PRODUCTS
              ================================================= */}

              <div className="space-y-1 rounded-xl bg-slate-50 p-2">
                <Link
                  href="/products"
                  className="flex items-center justify-between px-3 py-2 text-sm font-bold text-[#0b2f5c]"
                >
                  <span>Products Catalog</span>

                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <Link
                    href="/products?category=ceiling-fans"
                    className="rounded-lg border border-slate-200 bg-white p-2.5 text-center text-xs font-bold text-slate-700 shadow-sm transition-colors hover:bg-blue-50 hover:text-[#0b2f5c]"
                  >
                    Ceiling Fans
                  </Link>

                  <Link
                    href="/products?category=table-fans"
                    className="rounded-lg border border-slate-200 bg-white p-2.5 text-center text-xs font-bold text-slate-700 shadow-sm transition-colors hover:bg-blue-50 hover:text-[#0b2f5c]"
                  >
                    Table Fans
                  </Link>

                  <Link
                    href="/products?category=pedestal-fans"
                    className="col-span-2 rounded-lg border border-slate-200 bg-white p-2.5 text-center text-xs font-bold text-slate-700 shadow-sm transition-colors hover:bg-blue-50 hover:text-[#0b2f5c]"
                  >
                    Pedestal Fans
                  </Link>
                </div>
              </div>

              {/* ABOUT */}

              <Link
                href="/about"
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  isActive("/about")
                    ? "bg-blue-50 text-[#0b2f5c]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              {/* =================================================
                  MOBILE BUSINESS DROPDOWN
              ================================================= */}

              <div className="overflow-hidden rounded-xl">
                <button
                  type="button"
                  onClick={() =>
                    setIsMobileBusinessOpen(!isMobileBusinessOpen)
                  }
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold ${
                    isBusinessActive
                      ? "bg-blue-50 text-[#0b2f5c]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  aria-expanded={isMobileBusinessOpen}
                >
                  <span>Business</span>

                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileBusinessOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileBusinessOpen && (
                  <div className="mt-1 space-y-1 rounded-xl bg-slate-50 p-2">
                    {/* WHOLESALE */}

                    <Link
                      href="/wholesale"
                      className={`block rounded-lg px-4 py-3 ${
                        isActive("/wholesale")
                          ? "bg-white text-[#0b2f5c] shadow-sm"
                          : "text-slate-700 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">
                          Wholesale
                        </span>

                        <ArrowUpRight className="h-4 w-4 text-slate-400" />
                      </div>

                      <p className="mt-1 text-[11px] text-slate-500">
                        Bulk orders & wholesale pricing
                      </p>
                    </Link>

                    {/* DEALER */}

                    <Link
                      href="/dealers"
                      className={`block rounded-lg px-4 py-3 ${
                        isActive("/dealers")
                          ? "bg-white text-[#0b2f5c] shadow-sm"
                          : "text-slate-700 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">
                          Become a Dealer
                        </span>

                        <ArrowUpRight className="h-4 w-4 text-slate-400" />
                      </div>

                      <p className="mt-1 text-[11px] text-slate-500">
                        Join the LIMRA dealer network
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* CONTACT */}

              <Link
                href="/contact"
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  isActive("/contact")
                    ? "bg-blue-50 text-[#0b2f5c]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* =================================================
                MOBILE ACTION BUTTONS
            ================================================= */}

            <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-200 pt-4">
              <Link
                href="/contact"
                className="w-full rounded-xl bg-[#0b2f5c] py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md"
              >
                Get a Quote
              </Link>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-50 py-3 text-center text-xs font-bold text-emerald-800"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />

                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
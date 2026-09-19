"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Catalogue", href: "/catalog" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-2xl">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between lg:h-[82px]">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group relative flex h-11 w-36 shrink-0 items-center sm:h-12 sm:w-44"
          >
            <Image
              src="/images/brand/Limra-logo.jpeg"
              alt="LIMRA INDUSTRY"
              fill
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain object-left transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Active / hover background */}
                  <span
                    className={`absolute inset-0 -z-0 rounded-full transition-all duration-300 ${
                      active
                        ? "scale-100 bg-primary/10 opacity-100"
                        : "scale-90 bg-secondary opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />

                  <span className="relative z-10">
                    {item.name}
                  </span>

                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                      active
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}
          <div className="hidden items-center gap-3 lg:flex">

            <ThemeToggle />

            <div className="mx-1 h-7 w-px bg-border" />

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <MessageCircle className="h-4 w-4" />

              <span>Enquire Now</span>

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}
          <div className="flex items-center gap-2 lg:hidden">

            <ThemeToggle />

            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() =>
                setMobileMenuOpen((open) => !open)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:border-primary hover:bg-secondary"
            >
              {mobileMenuOpen ? (
                <X className="h-[18px] w-[18px]" />
              ) : (
                <Menu className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <div
        className={`overflow-hidden border-t border-border/70 bg-background transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-container px-4 sm:px-6">

          <nav
            aria-label="Mobile navigation"
            className="py-3"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between border-b border-border py-4 transition-colors duration-300 ${
                    active
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">

                    {/* Active indicator */}
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-primary transition-all duration-300 ${
                        active
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    />

                    <span className="text-sm font-medium">
                      {item.name}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={`h-4 w-4 transition-all duration-300 ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group my-5 flex items-center justify-between rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Enquire Now
              </span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </nav>

          {/* Mobile Brand */}
          <div className="border-t border-border py-5">
            <div className="flex items-center justify-between">

              <div>
                <p className="font-heading text-sm font-semibold tracking-tight">
                  LIMRA INDUSTRY
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Better Air. Better Living.
                </p>
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Ceiling Fans
              </span>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
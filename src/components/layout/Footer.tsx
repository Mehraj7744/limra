import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Catalogue", href: "/catalog" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: '48" Premium Range', href: "/products?range=48-inch" },
  { label: '24" Premium Range', href: "/products?range=24-inch" },
  { label: "Auro", href: "/products?model=Auro" },
  { label: "High Breeze", href: "/products?model=High%20Breeze" },
  { label: "Avencer", href: "/products?model=Avencer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-footer-border bg-footer text-footer-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1.2fr] lg:gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center"
            >
              <span className="font-heading text-3xl font-bold tracking-[-0.04em] transition-opacity duration-300 group-hover:opacity-75">
                LIMRA
              </span>

              <span className="ml-2 border-l border-footer-border pl-2 text-xs font-medium uppercase tracking-[0.18em] text-footer-muted">
                Industry
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-footer-muted">
              Focused on thoughtfully designed ceiling fans for modern
              residential and commercial spaces.
            </p>

            <Link
              href="/products"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-footer-foreground transition-colors duration-300 hover:text-primary"
            >
              Explore Products

              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-footer-muted">
              Company
            </p>

            <ul className="mt-6 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors duration-300 hover:text-footer-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-footer-muted">
              Products
            </p>

            <ul className="mt-6 space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-muted transition-colors duration-300 hover:text-footer-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-footer-muted">
              Contact
            </p>

            <div className="mt-6 space-y-5">

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <p className="text-sm leading-6 text-footer-muted">
                  H.No.10-1-31,
                  <br />
                  Fathe Nagar, Balanagar,
                  <br />
                  Hyderabad, Telangana
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+910000000000"
                className="group flex items-center gap-3 text-sm text-footer-muted transition-colors duration-300 hover:text-footer-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />

                <span>Contact Us</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@limraindustry.com"
                className="group flex items-center gap-3 text-sm text-footer-muted transition-colors duration-300 hover:text-footer-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />

                <span>info@limraindustry.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Statement */}
      <div className="border-y border-footer-border">
        <div className="mx-auto max-w-container px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="font-heading text-2xl font-semibold tracking-tight text-footer-foreground sm:text-3xl">
              Better Air.
              <span className="text-footer-muted">
                {" "}
                Better Living.
              </span>
            </p>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-footer-border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-footer-muted transition-all duration-300 hover:border-primary hover:text-footer-foreground"
            >
              Get in touch

              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-container px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} LIMRA INDUSTRY. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-footer-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-footer-foreground"
            >
              Terms
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
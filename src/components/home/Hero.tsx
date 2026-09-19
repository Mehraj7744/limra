import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wind,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: Wind,
    value: "Powerful Airflow",
  },
  {
    icon: Zap,
    value: "Energy Efficient",
  },
  {
    icon: ShieldCheck,
    value: "Built to Last",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-background sm:min-h-[760px] lg:min-h-[calc(100vh-5rem)]">
      {/* =========================================================
          RESPONSIVE BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 -z-20">
        <picture>
          {/* Mobile */}
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero/hero-mobile.png"
          />

          {/* Tablet */}
          <source
            media="(max-width: 1023px)"
            srcSet="/images/hero/hero-tablet.png"
          />

          {/* Desktop */}
          <img
            src="/images/hero/hero-desktop.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      {/* =========================================================
          RESPONSIVE IMAGE OVERLAY
      ========================================================= */}

      {/* Desktop overlay */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-background via-background/80 to-transparent lg:block" />

      {/* Tablet overlay */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-background/95 via-background/70 to-background/20 md:block lg:hidden" />

      {/* Mobile overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/55 to-background lg:hidden" />

      {/* Subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="mx-auto flex min-h-[720px] max-w-container items-center px-4 py-20 sm:min-h-[760px] sm:px-6 sm:py-24 lg:min-h-[calc(100vh-5rem)] lg:px-8 lg:py-20">
        <div className="w-full max-w-2xl lg:max-w-xl xl:max-w-2xl">

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-accent" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
              Premium Ceiling Fans
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl">
            Better Air.
            <span className="mt-2 block text-primary">
              Better Living.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Premium ceiling fans engineered for powerful airflow, efficient
            performance and lasting reliability — designed for modern homes,
            commercial spaces and everyday comfort.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Our Products

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors duration-300 hover:bg-background"
            >
              Request a Catalogue
            </Link>
          </div>

          {/* =====================================================
              TRUST / VALUE POINTS
          ===================================================== */}
          <div className="mt-10 border-t border-border/70 pt-7">
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.value}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-primary backdrop-blur-md">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.value}
                      </p>

                      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>Designed for performance</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Manufacturer credibility */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Limra Industries
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground xl:flex">
        <span>Explore</span>

        <span className="h-px w-10 bg-border" />
      </div>
    </section>
  );
}
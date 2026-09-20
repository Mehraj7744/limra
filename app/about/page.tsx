import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Factory,
  Gauge,
  Handshake,
  Leaf,
  MessageCircle,
  Ruler,
  Settings2,
  ShieldCheck,
  Target,
  Wind,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Settings2,
    title: "Product Focus",
    description:
      "We keep our attention on developing ceiling fan products that balance design, airflow requirements and everyday usability.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Quality Mindset",
    description:
      "A consistent focus on materials, finishing and product details helps us build products with dependable everyday performance.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Customer First",
    description:
      "We aim to understand the requirements of customers, dealers and business partners and build long-term relationships around them.",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Responsible Approach",
    description:
      "We believe good product design should consider performance, durability, efficient use of resources and the needs of modern spaces.",
  },
];

const capabilities = [
  {
    icon: Ruler,
    title: "Product Development",
    description:
      "A focused approach to ceiling fan designs, sizes, finishes and product requirements.",
  },
  {
    icon: Wind,
    title: "Airflow & Performance",
    description:
      "Product development centred around practical airflow requirements for residential and commercial spaces.",
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    description:
      "Attention to product construction and details that contribute to dependable everyday operation.",
  },
  {
    icon: BadgeCheck,
    title: "Finish & Detail",
    description:
      "Multiple finishes and carefully considered visual details allow products to complement different interiors.",
  },
];

const ranges = [
  {
    size: '48"',
    title: "48-inch Premium Range",
    models: ["Auro", "High Breeze", "Avencer", "Enticer", "Jazz"],
  },
  {
    size: '24"',
    title: "24-inch Premium Range",
    models: ["High Breeze", "Auro", "Fantasy", "V130"],
  },
];

const applications = [
  "Homes",
  "Commercial Spaces",
  "Workspaces",
  "Large Spaces",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  About Lemra Industries
                </span>
              </div>

              <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Engineered for <span className="text-primary">better airflow.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Lemra Industries specializes in developing and engineering thoughtfully 
                designed ceiling fans built for contemporary residential and high-performance commercial spaces.
              </p>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end w-full">
              <div className="relative rounded-2xl border border-border bg-background/80 p-8 shadow-xl backdrop-blur-md">
                <div className="absolute -top-3 right-8 rounded-md bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                  Our Approach
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-foreground">
                  Precision & Intent
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Product-focused, design-conscious, and performance-oriented. Every ceiling fan we build reflects an uncompromising commitment to modern aesthetics and durability.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-20 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-background/50 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="p-6 sm:p-8">
              <p className="font-heading text-4xl font-bold tracking-tight text-foreground">48"</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Premium Full-Size Range</p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-heading text-4xl font-bold tracking-tight text-foreground">24"</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Compact High-Performance Range</p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-heading text-4xl font-bold tracking-tight text-foreground">09</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Distinct Models Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY INTRODUCTION
      ========================================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-secondary shadow-2xl lg:aspect-[4/5]">
                <img
                  src="/images/about/about-factory.png"
                  alt="Lemra Industries manufacturing and design workflow"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-background/80 p-6 backdrop-blur-xl shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Excellence in Motion</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Ceiling fans built around modern interior spaces.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Who We Are</span>
              </div>

              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
                A focused approach to ceiling fan engineering.
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Lemra Industries stands at the intersection of robust mechanical engineering and sophisticated design. We focus exclusively on crafting ceiling fans that offer exceptional reliability.
                </p>
                <p>
                  Our lineup spans comprehensive 48-inch full-size variants and versatile 24-inch compact units, ensuring precise coverage for varying room dimensions and interior schemes.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:translate-x-1"
                >
                  Explore our products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="border-y border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <div className="relative rounded-3xl border border-border bg-background p-8 sm:p-10 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <span className="font-heading text-6xl font-black text-muted-foreground/10">01</span>
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary">Our Mission</p>
              <h3 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">Build products people can reliably count on.</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                To engineer ceiling fans combining high mechanical performance, fine visual architecture, and everyday longevity without compromise.
              </p>
            </div>

            {/* Vision */}
            <div className="relative rounded-3xl border border-primary/20 bg-primary text-primary-foreground p-8 sm:p-10 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-primary-foreground">
                  <Wind className="h-6 w-6" />
                </div>
                <span className="font-heading text-6xl font-black text-white/10">02</span>
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Our Vision</p>
              <h3 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">Make superior airflow integral to modern spaces.</h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                To establish Lemra Industries as a definitive benchmark for trusted quality, innovative fan designs, and progressive environmental compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE VALUES
      ========================================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What Guides Us</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
              Core principles behind every single unit.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.number}
                  className="group relative rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted-foreground/40">{value.number}</span>
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="border-y border-border bg-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Technical Capabilities</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Precision engineering built for daily utility.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We handle the full production life cycle, ensuring high-grade materials and strict quality checks.
              </p>
              <div className="mt-8">
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  View Full Catalogue
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT RANGES
      ========================================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Collection</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
                Two premier sizes. Infinite execution.
              </h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Explore all products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {ranges.map((range, index) => (
              <div key={range.title} className="group overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="flex items-start justify-between border-b border-border pb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Catalog Tier</span>
                    <h3 className="mt-1 font-heading text-2xl font-bold">{range.title}</h3>
                  </div>
                  <span className="font-heading text-5xl font-extrabold text-muted-foreground/10">{range.size}</span>
                </div>
                <div className="pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Featured Models</p>
                  <div className="flex flex-wrap gap-2">
                    {range.models.map((model) => (
                      <span key={model} className="rounded-xl border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium">
                        {model}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/products?range=${index === 0 ? "48-inch" : "24-inch"}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    Explore range <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATIONS
      ========================================================= */}
      <section className="border-t border-border bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Applications</span>
              <h2 className="mt-3 font-heading text-3xl font-bold">Designed for spaces that matter.</h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {applications.map((app, index) => (
                <div key={app} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                  <span className="text-xs font-mono font-bold text-primary">0{index + 1}</span>
                  <h3 className="mt-6 font-heading text-base font-bold">{app}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70">Work With Lemra</span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s find the right product for your space.
              </h2>
              <p className="mt-4 text-base text-primary-foreground/80 sm:text-lg">
                Connect with our team for corporate catalogue access, dealer pricing, and product queries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
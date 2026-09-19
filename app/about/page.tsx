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
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-container px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  About Lemra Industries
                </p>
              </div>

              <h1 className="mt-6 font-heading text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
                Focused on
                <span className="block text-primary">better airflow.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Lemra Industries is focused on developing and offering
                thoughtfully designed ceiling fans for modern residential and
                commercial spaces.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="border-l-2 border-primary pl-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                  Our Approach
                </p>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Product-focused. Design-conscious. Performance-oriented.
                  Built around the everyday requirements of the spaces people
                  live and work in.
                </p>
              </div>
            </div>
          </div>

          {/* Hero stats / descriptors */}
          <div className="mt-16 grid border-y border-border sm:grid-cols-3">
            <div className="border-b border-border py-6 sm:border-b-0 sm:border-r sm:pr-8">
              <p className="font-heading text-3xl font-bold text-foreground">
                48"
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Premium full-size range
              </p>
            </div>

            <div className="border-b border-border py-6 sm:border-b-0 sm:px-8">
              <p className="font-heading text-3xl font-bold text-foreground">
                24"
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Compact premium range
              </p>
            </div>

            <div className="py-6 sm:border-l sm:border-border sm:pl-8">
              <p className="font-heading text-3xl font-bold text-foreground">
                09
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Models across current ranges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY INTRODUCTION
      ========================================================= */}
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <img
                  src="/images/about/about-factory.png"
                  alt="Lemra Industries ceiling fan manufacturing and product environment"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-background/80 p-5 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Lemra Industries
                  </p>

                  <p className="mt-2 text-sm font-medium text-foreground">
                    Ceiling fans designed around modern spaces.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-border bg-card p-5 shadow-card sm:block lg:-right-6">
                <Factory className="h-6 w-6 text-primary" />

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Product Focus
                </p>

                <p className="mt-1 text-sm font-semibold text-foreground">
                  Ceiling Fans
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Who We Are
                </p>
              </div>

              <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                A focused approach to ceiling fan manufacturing.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                <p>
                  Lemra Industries is a ceiling fan-focused brand with an
                  emphasis on practical product design, dependable performance
                  and contemporary finishes.
                </p>

                <p>
                  Our product collection is built around different space
                  requirements, with premium 48-inch and compact 24-inch
                  ranges covering a selection of models and finishes.
                </p>

                <p>
                  We aim to create products that fit naturally into modern
                  interiors while keeping the fundamental purpose of a ceiling
                  fan at the centre — delivering effective everyday airflow.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Explore our products

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION
      ========================================================= */}
      <section className="border-y border-border bg-secondary py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Mission */}
            <div className="group rounded-2xl border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-card sm:p-10">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Target className="h-5 w-5" />
                </div>

                <span className="font-heading text-5xl font-bold text-muted-foreground/20">
                  01
                </span>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Our Mission
              </p>

              <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Build products people can rely on.
              </h3>

              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                Our mission is to develop ceiling fans that combine practical
                performance, thoughtful design and dependable everyday use,
                while continuously improving the product experience.
              </p>
            </div>

            {/* Vision */}
            <div className="group rounded-2xl border border-border bg-primary p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-card sm:p-10">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground text-primary">
                  <Wind className="h-5 w-5" />
                </div>

                <span className="font-heading text-5xl font-bold text-primary-foreground/20">
                  02
                </span>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                Our Vision
              </p>

              <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Make better airflow part of better spaces.
              </h3>

              <p className="mt-5 text-sm leading-7 text-primary-foreground/70 sm:text-base">
                We envision building a trusted ceiling fan brand known for
                thoughtful products, consistent quality and a clear
                understanding of the needs of modern spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What Guides Us
              </p>
            </div>

            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Principles behind
              <span className="block text-primary">the product.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Our approach is shaped by a few simple principles that influence
              how we think about products, customers and long-term growth.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="group bg-background p-7 transition-colors duration-300 hover:bg-secondary sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-muted-foreground/50">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-heading text-xl font-bold text-foreground">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT / ENGINEERING APPROACH
      ========================================================= */}
      <section className="border-y border-border bg-secondary py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Our Approach
                </p>
              </div>

              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Engineering with the everyday user in mind.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                A ceiling fan is both a functional product and an important
                part of an interior. Our approach considers both sides of that
                equation.
              </p>

              <div className="mt-8">
                <Link
                  href="/catalog"
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
                >
                  View Catalogue

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-semibold text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 font-heading text-xl font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
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
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Our Collection
                </p>
              </div>

              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Two ranges.
                <span className="block text-primary">
                  Multiple possibilities.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Our current catalogue is organised around two premium sweep
                sizes, with models designed for different space requirements
                and design preferences.
              </p>
            </div>

            <Link
              href="/products"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
            >
              Explore all products

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {ranges.map((range, index) => (
              <div
                key={range.title}
                className="group overflow-hidden rounded-2xl border border-border bg-secondary"
              >
                <div className="flex items-start justify-between border-b border-border p-7 sm:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Premium Range
                    </p>

                    <h3 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                      {range.title}
                    </h3>
                  </div>

                  <span className="font-heading text-5xl font-bold text-foreground/10 sm:text-6xl">
                    {range.size}
                  </span>
                </div>

                <div className="p-7 sm:p-8">
                  <div className="flex flex-wrap gap-2">
                    {range.models.map((model) => (
                      <span
                        key={model}
                        className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground"
                      >
                        {model}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/products?range=${index === 0 ? "48-inch" : "24-inch"}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Explore range

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
      <section className="border-y border-border bg-secondary py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Where We Fit
              </p>

              <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Designed for the spaces that matter.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Our product ranges are intended for a variety of everyday
                environments, from homes to professional and commercial
                spaces.
              </p>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">
              {applications.map((application, index) => (
                <div
                  key={application}
                  className="border-b border-r border-border bg-background p-6 sm:p-7"
                >
                  <span className="text-xs font-semibold text-primary">
                    0{index + 1}
                  </span>

                  <h3 className="mt-10 font-heading text-lg font-bold text-foreground sm:text-xl">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
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
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                Work With Lemra
              </p>

              <h2 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Let&apos;s find the right product for your space.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/70 sm:text-lg">
                Explore our collection or contact our team for product,
                catalogue and business enquiries.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                Explore Products

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-4 w-4" />

                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
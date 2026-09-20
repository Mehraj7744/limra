import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Fan,
  Wind,
  ShieldCheck,
  CheckCircle2,
  Factory,
  Cpu,
  Gauge,
  Zap,
  Sparkles,
  Handshake,
  PhoneCall,
  Award,
  Layers,
} from "lucide-react";

const categories = [
  {
    id: "ceiling-fans",
    title: "Ceiling Fans",
    tag: "CEILING FANS",
    desc: "Efficient and reliable ceiling fans engineered for optimal air delivery in residential and commercial spaces.",
    image: "/images/products/demo.png",
    href: "/products/ceiling-fans",
    icon: Fan,
  },
  {
    id: "table-fans",
    title: "Table Fans",
    tag: "TABLE FANS",
    desc: "Compact and powerful table fans built for focused airflow, dynamic oscillation, and everyday comfort.",
    image: "/images/products/table-fan-01.jpg",
    href: "/products/table-fans",
    icon: Wind,
  },
  {
    id: "pedestal-fans",
    title: "Pedestal Fans",
    tag: "PEDESTAL FANS",
    desc: "High-airflow pedestal fans engineered for heavy-duty performance across homes, offices, and commercial floors.",
    image: "/images/products/pedestal-fan-01.jpg",
    href: "/products/pedestal-fans",
    icon: ShieldCheck,
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Auro",
    category: "Ceiling Fan",
    image: "/images/products/auro.jpg",
    href: "/products?model=Auro",
    specs: "High Velocity • Silent Operation",
  },
  {
    id: 2,
    name: "High Breeze",
    category: "Ceiling Fan",
    image: "/images/products/demo.png",
    href: "/products?model=High%20Breeze",
    specs: "Energy Efficient • Wide Air Spread",
  },
  {
    id: 3,
    name: "Avencer",
    category: "Ceiling Fan",
    image: "/images/products/demo.png",
    href: "/products?model=Avencer",
    specs: "Heavy Duty Motor • Premium Finish",
  },
];

const whyLimraFeatures = [
  {
    icon: Factory,
    title: "Factory Direct Supply",
    desc: "Direct manufacturer pricing and inventory pipelines for dealers, retailers, contractors, and large-scale bulk buyers.",
  },
  {
    icon: Cpu,
    title: "Precision Motors",
    desc: "Engineered with heavy-duty copper windings and robust architecture for dependable, continuous everyday operation.",
  },
  {
    icon: Gauge,
    title: "Superior Air Delivery",
    desc: "Aerodynamically balanced blades designed to maximize airflow coverage and energy efficiency across diverse room sizes.",
  },
  {
    icon: Zap,
    title: "Energy Optimized",
    desc: "Advanced electrical configurations focused on minimizing power consumption without compromising performance.",
  },
  {
    icon: Sparkles,
    title: "Rigorous Quality Control",
    desc: "Every unit undergoes strict multi-point structural and electrical inspections before leaving our manufacturing lines.",
  },
  {
    icon: ShieldCheck,
    title: "Robust Warranty Support",
    desc: "Comprehensive warranty backing and dedicated service channels to ensure total confidence for business partners and users.",
  },
];

const stats = [
  { label: "Years of Excellence", value: "15+" },
  { label: "Manufacturing Capacity", value: "100k+" },
  { label: "Dealer Network", value: "500+" },
  { label: "Quality Checks", value: "100%" },
];

const WHATSAPP_NUMBER = "910000000000";

function getWhatsAppUrl() {
  const message = encodeURIComponent(
    "Hello LIMRA INDUSTRY, I would like to enquire about your ceiling and pedestal fans."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function HomePage() {
  return (
    <main className="selection:bg-blue-100 selection:text-[#0b2f5c]">
      
      {/* =====================================================
          HERO SECTION
      ==================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#07192f] to-[#0b2f5c] text-white">
        {/* Background Decorative Glows */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* Hero Content */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                <span>Premier Industrial & Residential Fan Manufacturer</span>
              </div>

              <h1 className="font-['Cabinet_Grotesk',sans-serif] text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
                Engineering Air, <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Crafted for Excellence.
                </span>
              </h1>

              <p className="max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed font-normal">
                Discover next-generation ceiling, table, and pedestal fans designed for modern homes, commercial complexes, and large-scale institutional projects.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 text-sm font-bold tracking-wide text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30 sm:text-base"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#wholesale-section"
                  className="rounded-xl border border-slate-600 bg-white/5 px-7 py-4 text-sm font-bold tracking-wide text-white backdrop-blur-md transition-all hover:border-slate-400 hover:bg-white/10 sm:text-base"
                >
                  Bulk & Wholesale Supply
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-6 mt-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Factory Direct</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>B2B Verified</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Pan-India Supply</span>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 opacity-75 blur-xl" />
                
                <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-950">
                    <img
                      src="/images/products/demo.png"
                      alt="LIMRA flagship ceiling fan"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-lg bg-slate-900/90 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md border border-slate-700">
                        Auro Flagship Series
                      </span>
                      <span className="text-xs text-cyan-300 font-semibold">
                        ISO 9001 Certified
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-400">
                    <span className="font-medium text-slate-200">
                      Precision Manufacturing Hub
                    </span>
                    <span className="text-slate-400">
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STATS METRICS STRIP
      ==================================================== */}
      <section className="border-b border-slate-200 bg-white shadow-sm relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {stats.map((stat, idx) => (
              <div key={idx} className={`px-4 text-center ${idx !== 0 ? 'pt-4 md:pt-0' : ''}`}>
                <p className="font-['Cabinet_Grotesk',sans-serif] text-3xl sm:text-4xl font-extrabold text-[#0b2f5c]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT CATEGORIES
      ==================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center space-y-3">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0b2f5c]">
              Core Manufacturing Lines
            </span>
            <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Explore Our Fan Categories
            </h2>
            <p className="text-base text-slate-600">
              High-performance cooling solutions custom-built for residential architecture, retail spaces, and institutional infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute left-4 top-4 rounded-lg bg-[#0b2f5c] px-3 py-1.5 text-xs font-extrabold tracking-wider text-white shadow-md">
                      {category.tag}
                    </span>
                  </div>

                  <div className="flex flex-grow flex-col p-6 sm:p-8">
                    <div className="mb-3 flex items-center gap-3 text-[#0b2f5c]">
                      <div className="rounded-xl bg-blue-50 p-2.5">
                        <Icon className="h-6 w-6 stroke-[2]" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {category.title}
                      </h3>
                    </div>

                    <p className="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                      {category.desc}
                    </p>

                    <Link
                      href={category.href}
                      className="inline-flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-bold text-slate-900 transition-all group-hover:border-[#0b2f5c] group-hover:bg-[#0b2f5c] group-hover:text-white"
                    >
                      <span>Browse {category.title}</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PRODUCTS SHOWCASE
      ==================================================== */}
      <section className="bg-white py-20 sm:py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-2">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0b2f5c]">
                Flagship Catalog
              </span>
              <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Featured Fan Models
              </h2>
              <p className="text-base text-slate-600">
                Top-tier selections engineered for maximum air delivery and architectural elegance.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0b2f5c] transition-colors hover:text-blue-700"
            >
              <span>View Entire Collection</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-md bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-slate-800 shadow-sm">
                    {product.specs}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#174e8c]">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <div className="mt-6 flex items-center justify-between text-sm font-bold text-[#0b2f5c]">
                    <span className="group-hover:underline">Explore Specifications</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE LIMRA
      ==================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center space-y-3">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0b2f5c]">
              Engineering & Performance
            </span>
            <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Why Choose LIMRA Industry?
            </h2>
            <p className="text-base text-slate-600">
              Built on decades of manufacturing precision, unwavering quality, and dedicated trade partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyLimraFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#0b2f5c]">
                    <Icon className="h-7 w-7 stroke-[1.75]" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* =====================================================
    AIRFLOW & MOTOR TECHNOLOGY SPOTLIGHT
===================================================== */}
<section className="bg-white py-20 sm:py-24 border-b border-slate-200">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
      
      <div className="space-y-6 lg:col-span-6">
        <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0b2f5c]">
          Advanced R&D
        </span>
        <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Engineered for Maximum Torque & Whisper-Quiet Operation
        </h2>
        <p className="text-base leading-relaxed text-slate-600">
          Our proprietary double-ball bearing motor architecture combined with aerodynamic blade profiling ensures optimal air thrust across every corner of the room while keeping decibel levels to an absolute minimum.
        </p>

        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#0b2f5c]">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-slate-800">100% Copper Stator Windings for High Thermal Tolerance</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#0b2f5c]">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-slate-800">Aerodynamically Tested Sweep Angles for High Air Delivery (RPM)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#0b2f5c]">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-slate-800">Anti-Rust Powder Coated Finish for Long-Lasting Aesthetic Brilliance</span>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0b2f5c] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition-all hover:bg-[#07192f]"
          >
            <span>Explore Technical Specifications</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-2 shadow-2xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-950">
            <img
              src="/images/products/demo.png"
              alt="LIMRA Motor Technology"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Core Assembly</p>
                <p className="text-lg font-bold text-white">Heavy-Duty Copper Motor Unit</p>
              </div>
              <span className="rounded-xl bg-cyan-500 px-3.5 py-1.5 text-xs font-extrabold text-slate-950">
                Class E Insulation
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* =====================================================
    MANUFACTURING EXCELLENCE & QC PROCESS
===================================================== */}
<section className="bg-slate-900 py-20 text-white sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto mb-16 max-w-2xl text-center space-y-3">
      <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20">
        Rigorous Standards
      </span>
      <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-white sm:text-4xl">
        Built Under Strict Quality Assurance
      </h2>
      <p className="text-base text-slate-400">
        Every unit leaving our production line undergoes a multi-step testing protocol to guarantee durability, safety, and peak performance.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
      <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 font-bold text-lg">
          01
        </div>
        <h3 className="text-lg font-bold text-white">Raw Material Audit</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Only high-grade electrolytic copper and prime-purity aluminum alloys are cleared for component fabrication.
        </p>
      </div>

      <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 font-bold text-lg">
          02
        </div>
        <h3 className="text-lg font-bold text-white">Precision Winding</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Computerized CNC winding machines ensure uniform coil density, optimizing electrical resistance and energy consumption.
        </p>
      </div>

      <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 font-bold text-lg">
          03
        </div>
        <h3 className="text-lg font-bold text-white">Dynamic Balancing</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Blades and rotor assemblies are dynamically balanced to eliminate vibration and ensure zero-noise rotation at top speeds.
        </p>
      </div>

      <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 font-bold text-lg">
          04
        </div>
        <h3 className="text-lg font-bold text-white">Burn-In & Load Testing</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Finished units undergo prolonged continuous load testing under fluctuating voltage conditions prior to packaging.
        </p>
      </div>
    </div>
  </div>
</section>

{/* =====================================================
    TESTIMONIALS / PARTNER TRUST
===================================================== */}
<section className="bg-slate-50 py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto mb-16 max-w-2xl text-center space-y-3">
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0b2f5c]">
        Trusted Nationwide
      </span>
      <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        Backed by Dealers & Project Contractors
      </h2>
      <p className="text-base text-slate-600">
        Hear what our long-standing regional distributors and institutional partners have to say about LIMRA manufacturing quality.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm leading-relaxed text-slate-600 italic">
          &ldquo;We have been stocking LIMRA ceiling fans for over 4 years. Their air delivery consistency and low complaint rate make them our top-selling brand across dealerships.&rdquo;
        </p>
        <div className="mt-6 border-t border-slate-100 pt-4">
          <p className="font-bold text-slate-900">Rajesh Sharma</p>
          <p className="text-xs text-slate-500">Principal Distributor, Maharashtra</p>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm leading-relaxed text-slate-600 italic">
          &ldquo;Sourced over 500 pedestal units for our university campus blocks. Exceptional build rigidity, heavy copper motors, and reliable factory direct dispatch schedules.&rdquo;
        </p>
        <div className="mt-6 border-t border-slate-100 pt-4">
          <p className="font-bold text-slate-900">Vikram Malhotra</p>
          <p className="text-xs text-slate-500">Institutional Infrastructure Lead</p>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm leading-relaxed text-slate-600 italic">
          &ldquo;The finish quality on their Auro flagship series is comparable to top international brands, but at a much more competitive wholesale price point.&rdquo;
        </p>
        <div className="mt-6 border-t border-slate-100 pt-4">
          <p className="font-bold text-slate-900">Anil Verma</p>
          <p className="text-xs text-slate-500">Retail Electrical Chain Owner</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          WHOLESALE & B2B SECTION
      ==================================================== */}
      <section
        id="wholesale-section"
        className="border-t border-slate-200 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            
            {/* Info Side */}
            <div className="space-y-6 lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase text-[#0b2f5c]">
                <Layers className="h-3.5 w-3.5" />
                <span>B2B & Institutional Supply</span>
              </div>

              <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Wholesale & Bulk Fan Sourcing
              </h2>

              <p className="text-base leading-relaxed text-slate-600">
                Sourcing fans for your regional dealership, retail chain, hostel, university campus, housing project, or large enterprise order? Partner directly with LIMRA Industry for unmatched pricing and assurance.
              </p>

              <div className="space-y-4 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <Factory className="h-5 w-5 shrink-0 text-[#0b2f5c] mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Direct Manufacturer Pricing</strong>
                    <span className="text-slate-600 text-xs">Transparent rate cards and high profit margins for stockists and dealers.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#0b2f5c] mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Quality-Assured Dispatch</strong>
                    <span className="text-slate-600 text-xs">Bulk units undergo rigorous electrical endurance tests before shipping.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <Handshake className="h-5 w-5 shrink-0 text-[#0b2f5c] mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Dedicated Partner Assistance</strong>
                    <span className="text-slate-600 text-xs">End-to-end logistics support tailored for large commercial projects.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/dealers"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0b2f5c] hover:underline"
                >
                  <span>Looking to join our dealership network?</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-100">
                <h3 className="text-2xl font-bold text-slate-900">
                  Request a Wholesale Quote
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Provide your volume specifications below, and our business development team will respond within 24 hours.
                </p>

                <form className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0b2f5c] focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0b2f5c] focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Business Email</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0b2f5c] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Requirement Type</label>
                    <select
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#0b2f5c] focus:ring-2 focus:ring-blue-100"
                      defaultValue=""
                    >
                      <option value="" disabled>Select partnership classification</option>
                      <option value="wholesale">Wholesale Buyer / Stockist</option>
                      <option value="dealer">Authorized Dealer</option>
                      <option value="retailer">Retail Partner</option>
                      <option value="institutional">Institutional / Project Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Project & Volume Details</label>
                    <textarea
                      rows={4}
                      placeholder="Specify estimated quantities, models, and delivery location..."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0b2f5c] focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-xl bg-[#0b2f5c] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-[#07192f] hover:shadow-blue-900/40"
                  >
                    Submit Quotation Inquiry
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>


{/* =====================================================
    SUSTAINABILITY & ENERGY EFFICIENCY
===================================================== */}
<section className="bg-gradient-to-br from-[#0b2f5c] to-slate-900 py-16 text-white sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-7">
        <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-300 border border-emerald-500/30">
          Green Initiative
        </span>
        <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-white sm:text-4xl">
          Designed for Power Savings & Eco-Friendly Operation
        </h2>
        <p className="text-base leading-relaxed text-slate-300">
          With rising energy costs, our latest generation motors incorporate high power factor designs that substantially reduce electricity consumption without compromising on air delivery volume.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm border border-white/10">
            <p className="text-2xl font-black text-cyan-400">Up to 40%</p>
            <p className="text-xs text-slate-300">Lower Energy Loss</p>
          </div>
          <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm border border-white/10">
            <p className="text-2xl font-black text-cyan-400">5-Star</p>
            <p className="text-xs text-slate-300">Energy Efficiency Compliant</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:col-span-5">
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h3 className="text-lg font-bold text-white mb-3">Request Bulk Catalog & Pricing</h3>
          <p className="text-sm text-slate-300 mb-6">Get our comprehensive product specifications and commercial wholesale price sheets sent directly to your inbox.</p>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Enter your business email" 
              className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
            />
            <button 
              type="button" 
              className="w-full rounded-xl bg-cyan-500 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400"
            >
              Download Wholesale Catalog
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* =====================================================
    FREQUENTLY ASKED QUESTIONS (FAQ)
===================================================== */}
<section className="bg-white py-20 sm:py-24 border-t border-slate-200">
  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto mb-16 text-center space-y-3">
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0b2f5c]">
        Got Questions?
      </span>
      <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="text-base text-slate-600">
        Everything you need to know about our manufacturing capabilities, warranty support, and bulk logistics.
      </p>
    </div>

    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-base font-bold text-slate-900">What is the minimum order quantity (MOQ) for wholesale buyers?</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Our wholesale MOQ varies depending on the product tier (ceiling, table, or pedestal fans), generally starting at standard master carton quantities suited for retail stockists and regional dealers.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-base font-bold text-slate-900">Do you offer custom branding or OEM manufacturing services?</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Yes, we facilitate OEM and bulk custom branding solutions for large-scale institutional contractors and national distribution partners meeting specific volume criteria.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-base font-bold text-slate-900">What warranty terms are included with LIMRA fan models?</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          All our motors are backed by a comprehensive manufacturer warranty covering structural integrity and core electrical performance. Specific details vary by model class.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-base font-bold text-slate-900">How can I apply to become an authorized regional dealer?</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          You can easily submit an application through our Dealer portal or contact our business development desk directly via WhatsApp or the quote form on this page.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          DEALER CTA BANNER
      ==================================================== */}
      <section className="bg-[#07192f] py-16 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-blue-900/60 bg-gradient-to-r from-[#0b2f5c] via-[#103a73] to-[#174e8c] p-8 shadow-2xl sm:p-12 md:flex-row">
            
            <div className="max-w-xl space-y-3 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                <Award className="h-4 w-4" />
                <span>Grow Your Business With Us</span>
              </span>
              <h2 className="font-['Cabinet_Grotesk',sans-serif] text-3xl font-black tracking-tight sm:text-4xl">
                Become a LIMRA Dealer Today
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-blue-100">
                Join our expanding network of authorized dealers and stockists. Benefit from priority factory supply, competitive margins, and complete marketing support.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row w-full md:w-auto">
              <Link
                href="/dealers"
                className="w-full rounded-xl bg-white px-8 py-4 text-center text-sm font-bold text-[#07192f] shadow-lg transition-all hover:bg-slate-100 sm:w-auto"
              >
                Apply for Dealership
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-center text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
              >
                <PhoneCall className="h-4 w-4 text-cyan-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
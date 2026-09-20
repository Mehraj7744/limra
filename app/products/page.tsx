import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { SlidersHorizontal, Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Full Catalog Collection</span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Premium ceiling fans <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">for every space.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore the Limra Industries premium range, featuring high-efficiency 48-inch and 24-inch ceiling fans engineered with advanced aerodynamic blades and striking modern finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Catalog Toolbar / Count Indicator */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary font-bold text-xs">
                {products.length}
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">Active Catalog Models</p>
                <p className="text-xs text-muted-foreground">Showing complete inventory range</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Filter Specifications</span>
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
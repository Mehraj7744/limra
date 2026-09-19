import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Our Products
          </p>

          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Ceiling fans engineered for every space.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Explore the Limra Industries product range, from energy-efficient
            BLDC fans to high-performance and industrial solutions.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          
          {/* Product count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {products.length}
              </span>{" "}
              products
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
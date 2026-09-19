import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({
    product,
}: ProductCardProps) {
    return (
        <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
            {/* Product Image */}
            <Link href={`/products/${product.slug}`}>
                <div className="relative aspect-square w-full overflow-hidden bg-secondary">
                    <Image
                        src={product.image}
                        alt={`${product.model} ceiling fan`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </Link>

            <div className="p-5">
                {/* Range */}
                <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                        {product.range}
                    </span>
                </div>

                {/* Model */}
                <Link href={`/products/${product.slug}`}>
                    <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                        {product.model}
                    </h3>
                </Link>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {product.description}
                </p>

                {/* Specification */}
                <div className="mt-5 border-y border-border py-4">
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Blade Sweep
                        </p>

                        <p className="mt-1 text-sm font-semibold text-foreground">
                            {product.specifications.sweep ?? "—"}
                        </p>
                    </div>
                </div>

                {/* Available Finishes */}
                {product.variants.length > 0 && (
                    <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                            Available finishes
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {product.variants.map((variant) => (
                                <span
                                    key={variant.finish}
                                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                                >
                                    {variant.finish}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* View */}
                <Link
                    href={`/products/${product.slug}`}
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                    View Product

                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
            </div>
        </article>
    );
}
import Link from "next/link";
import { ArrowRight, Wind } from "lucide-react";
import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({
    product,
}: ProductCardProps) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40">
            
            {/* Product Image Container */}
            <Link href={`/products/${product.slug}`} className="relative block overflow-hidden bg-secondary/50">
                <div className="relative aspect-square w-full overflow-hidden p-6">
                    <Image
                        src={product.image}
                        alt={`${product.model} ceiling fan`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Floating Range Badge */}
                <div className="absolute top-3 left-3 z-10">
                    <span className="rounded-full border border-border/60 bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-md">
                        {product.range}
                    </span>
                </div>
            </Link>

            {/* Content Details */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                {/* Model Title */}
                <Link href={`/products/${product.slug}`}>
                    <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                        {product.model}
                    </h3>
                </Link>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {product.description}
                </p>

                {/* Blade Sweep Specification Bar */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-secondary/50 px-3 py-2.5 border border-border/40">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Wind className="h-4 w-4 text-primary" />
                        <span className="text-[11px] font-medium">Blade Sweep</span>
                    </div>
                    <span className="text-xs font-bold text-foreground">
                        {product.specifications.sweep ?? "—"}
                    </span>
                </div>

                {/* Available Finishes Chips */}
                {product.variants.length > 0 && (
                    <div className="mt-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                            Finishes ({product.variants.length})
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {product.variants.slice(0, 3).map((variant) => (
                                <span
                                    key={variant.finish}
                                    className="rounded-md border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                                >
                                    {variant.finish}
                                </span>
                            ))}
                            {product.variants.length > 3 && (
                                <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold text-primary">
                                    +{product.variants.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}
              </div>

              {/* Action Button Link */}
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                    href={`/products/${product.slug}`}
                    className="group/link inline-flex items-center justify-between w-full text-xs font-bold text-primary transition-colors"
                >
                    <span>View Specifications</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover/link:bg-primary group-hover/link:text-primary-foreground">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </span>
                </Link>
              </div>

            </div>
        </article>
    );
}
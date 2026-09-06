import { Link } from "@tanstack/react-router";
import { gbp, type Product } from "@/lib/catalogue";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="grain relative aspect-3/4 overflow-hidden rounded-xl bg-secondary">
        <img
          src={product.image}
          alt={`${product.name} worn as ${product.becomes.split("→")[0]?.trim()}`}
          loading="lazy"
          width={1024}
          height={1365}
          className="absolute inset-0 size-full object-cover transition-opacity duration-[900ms] group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt={`${product.name}, second angle`}
          loading="lazy"
          className="absolute inset-0 size-full scale-[1.02] object-cover opacity-0 transition-opacity duration-[900ms] group-hover:opacity-100"
        />
        {product.convertible ? (
          <span className="absolute top-4 left-4 rounded-full border border-champagne/60 bg-background/50 px-3 py-1 text-[0.6rem] tracking-[0.2em] text-champagne uppercase backdrop-blur-sm">
            Convertible
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl">{product.name}</h3>
        <span className="text-sm text-champagne">{gbp(product.price)}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{product.blurb}</p>
      <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground/70 uppercase">
        {product.becomes}
      </p>
    </Link>
  );
}

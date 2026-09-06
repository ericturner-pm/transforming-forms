import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/catalogue";

const filters = ["All", "Shirts", "Dresses", "Outerwear", "Knitwear", "Convertible"] as const;

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "The Collection — Atelier Vessel" },
      {
        name: "description",
        content:
          "Shop convertible shirts, dresses, outerwear and knitwear from our London atelier. Each garment is cut to be worn more than one way.",
      },
      { property: "og:title", content: "The Collection — Atelier Vessel" },
      {
        property: "og:description",
        content: "Convertible shirts, dresses, outerwear and knitwear, made in Britain.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const shown = useMemo(() => {
    if (active === "All") return products;
    if (active === "Convertible") return products.filter((p) => p.convertible);
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">The collection</p>
          <h1 className="mt-5 max-w-2xl text-4xl md:text-6xl">
            Eight garments. Rather more than eight outfits.
          </h1>
          <p className="mt-5 max-w-prose text-muted-foreground">
            Everything here is cut in small runs in London. Hover a garment to see it in its second
            form.
          </p>
        </Reveal>

        <div className="rule-soft mt-12 flex flex-wrap gap-2 pt-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-5 py-2 text-[0.7rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
                active === f
                  ? "border-champagne bg-champagne text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-champagne/60 hover:text-champagne"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        {shown.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            Nothing in this category yet. It's being cut.
          </p>
        ) : null}
      </section>
    </div>
  );
}

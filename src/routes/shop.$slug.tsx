import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Truck, RotateCcw, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { findProduct, gbp, products } from "@/lib/catalogue";
import { useCart } from "@/lib/cart";
import heroVideo from "@/assets/hero-transform.mp4.asset.json";

const sizes = ["UK 6", "UK 8", "UK 10", "UK 12", "UK 14", "UK 16"];

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found — Atelier Vessel" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Atelier Vessel` },
        { name: "description", content: `${product.blurb} ${product.becomes}. ${gbp(product.price)}.` },
        { property: "og:title", content: `${product.name} — Atelier Vessel` },
        { property: "og:description", content: product.blurb },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [zoom, setZoom] = useState(false);
  const [activeImage, setActiveImage] = useState(product.gallery[0]!);

  return (
    <div className="pt-24 md:pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div
            onClick={() => setZoom((z) => !z)}
            className="grain relative aspect-3/4 cursor-zoom-in overflow-hidden rounded-2xl bg-secondary"
          >
            <img
              src={activeImage}
              alt={`${product.name} on the body`}
              width={1024}
              height={1365}
              className={`size-full object-cover transition-transform duration-[900ms] ${
                zoom ? "scale-[1.7] cursor-zoom-out" : "scale-100"
              }`}
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveImage(src);
                  setZoom(false);
                }}
                className={`overflow-hidden rounded-lg border transition-colors ${
                  activeImage === src ? "border-champagne" : "border-border hover:border-champagne/50"
                }`}
                aria-label={`View angle ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${product.name} angle ${i + 1}`}
                  loading="lazy"
                  className="aspect-3/4 w-full object-cover"
                />
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Tap the image to zoom. All shots are un-retouched studio photography.
          </p>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-4 text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg text-champagne">{gbp(product.price)}</p>
          <p className="mt-6 max-w-prose text-muted-foreground">{product.blurb}</p>
          <p className="mt-2 text-[0.7rem] tracking-[0.2em] text-muted-foreground/70 uppercase">
            {product.becomes}
          </p>

          <div className="mt-9">
            <div className="flex items-baseline justify-between">
              <p className="eyebrow">Size</p>
              <span className="text-xs text-muted-foreground">
                True to size. Between sizes, take the smaller.
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-full border px-4 py-2 text-xs tracking-[0.14em] uppercase transition-colors ${
                    size === s
                      ? "border-champagne bg-champagne text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-champagne/60 hover:text-champagne"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              if (!size) {
                toast.error("Choose a size first.");
                return;
              }
              add(product, size);
            }}
            className="btn-solid mt-8 w-full"
          >
            Add to bag
          </button>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex gap-3">
              <Truck className="mt-0.5 size-4 shrink-0 text-champagne" />
              <div>
                <dt className="text-bone">Complimentary UK delivery</dt>
                <dd className="text-muted-foreground">Two to four working days, tracked.</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <RotateCcw className="mt-0.5 size-4 shrink-0 text-champagne" />
              <div>
                <dt className="text-bone">Thirty days to change your mind</dt>
                <dd className="text-muted-foreground">Free returns, unworn, tags on.</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-champagne" />
              <div>
                <dt className="text-bone">Repaired for life</dt>
                <dd className="text-muted-foreground">
                  We mend anything we made, for as long as we're here.
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-12 space-y-8 border-t border-border pt-8 text-sm">
            <div>
              <p className="eyebrow">Fabric &amp; fit</p>
              <p className="mt-3 text-muted-foreground">
                {product.fabric}. Cut for a relaxed line through the body. Our model is 176cm and
                wears a UK 10.
              </p>
            </div>
            <div>
              <p className="eyebrow">Care</p>
              <p className="mt-3 text-muted-foreground">
                Cold hand wash or gentle dry clean. Press on the reverse, never on the placket. Hang
                on a broad shoulder and it will keep its memory.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <Reveal>
          <p className="eyebrow">The transformation</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Watch it change, in real time</h2>
          <div className="grain mt-8 overflow-hidden rounded-2xl">
            <video
              src={heroVideo.url}
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-3xl md:text-4xl">Worn with</h2>
              <Link to="/shop" className="link-quiet text-xs tracking-[0.2em] uppercase">
                All garments
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((p, i) => (
                <Reveal key={p.slug} delay={i * 120}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

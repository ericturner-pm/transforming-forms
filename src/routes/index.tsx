import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/SiteFooter";
import { bestSellers, journal } from "@/lib/catalogue";
import heroVideo from "@/assets/hero-transform.mp4.asset.json";
import heroStill from "@/assets/hero-still.jpg";
import studio from "@/assets/studio.jpg";
import detail from "@/assets/transform-detail.jpg";
import meridian from "@/assets/product-meridian.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Vessel — One Garment. Infinite Form." },
      {
        name: "description",
        content:
          "British-made transformative clothing. A shirt that becomes a dress, a coat that becomes a gilet — cut once, worn many ways.",
      },
      { property: "og:title", content: "Atelier Vessel — One Garment. Infinite Form." },
      {
        property: "og:description",
        content:
          "British-made transformative clothing. A shirt that becomes a dress, a coat that becomes a gilet.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative h-[100svh] w-full overflow-hidden">
        <video
          className="absolute inset-0 size-full object-cover"
          src={heroVideo.url}
          poster={heroStill}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="grain absolute inset-0 bg-linear-to-b from-background/55 via-background/25 to-background" />

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <p className="eyebrow">Atelier Vessel · London</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] text-bone sm:text-6xl md:text-7xl lg:text-8xl">
              One Garment.
              <br />
              Infinite Form.
            </h1>
            <p className="mx-auto mt-7 max-w-md text-sm text-muted-foreground sm:text-base">
              We cut clothes that change their minds. A shirt lengthens into a dress. A coat folds
              back into a gilet. Nothing is added, nothing is spare.
            </p>
            <div className="mt-10">
              <Link to="/shop" className="btn-soft">
                See the collection
              </Link>
            </div>
          </Reveal>
        </div>

        <a
          href="#story"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-champagne/70 transition hover:text-champagne"
          aria-label="Scroll to brand story"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-5 text-4xl md:text-5xl">
              I began with one dress and a train I kept missing
            </h2>
            <div className="mt-6 max-w-prose space-y-4 text-muted-foreground">
              <p>
                I was going straight from the studio to dinner most evenings, carrying a second
                outfit in a canvas bag. It seemed absurd. So I made a shirt that could become the
                dress instead.
              </p>
              <p>
                Everything we have made since follows that logic. Fewer garments, cut properly,
                asked to do more. It happens to be the most sustainable thing we know how to do.
              </p>
            </div>
            <Link to="/story" className="btn-soft mt-9">
              Read the full story
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="grain overflow-hidden rounded-2xl">
              <img
                src={studio}
                alt="A maker pinning a garment panel at our east London studio"
                loading="lazy"
                width={1600}
                height={1067}
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fabric border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow">The transform</p>
            <h2 className="mt-5 max-w-2xl text-4xl md:text-5xl">
              Three folds, a hidden placket, and it is a different garment
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Release",
                d: "Open the concealed placket at the waist. The bodice keeps its shape while the skirt lets go.",
                img: detail,
              },
              {
                n: "02",
                t: "Fall",
                d: "The under-panel drops to full length. The cloth is chosen so it remembers nothing.",
                img: meridian,
              },
              {
                n: "03",
                t: "Fasten",
                d: "Two bone hooks at the hip and it holds. Thirty seconds, standing up, no mirror.",
                img: studio,
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 140}>
                <div className="grain overflow-hidden rounded-xl">
                  <img
                    src={step.img}
                    alt={step.t}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
                <p className="eyebrow mt-6">{step.n}</p>
                <h3 className="mt-2 text-2xl">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link to="/how-it-transforms" className="btn-soft mt-14">
              Watch it happen
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Most worn</p>
              <h2 className="mt-4 text-4xl md:text-5xl">The ones that keep leaving us</h2>
            </div>
            <Link to="/shop" className="link-quiet text-xs tracking-[0.2em] uppercase">
              All garments
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((product, i) => (
            <Reveal key={product.slug} delay={i * 120}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <Reveal>
            <p className="eyebrow">From the journal</p>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {journal.map((entry, i) => (
              <Reveal key={entry.slug} delay={i * 120}>
                <Link to="/journal/$slug" params={{ slug: entry.slug }} className="group block">
                  <div className="grain overflow-hidden rounded-xl">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover transition duration-[900ms] group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="eyebrow mt-5">{entry.kicker}</p>
                  <h3 className="mt-2 text-2xl">{entry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{entry.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-10">
          <Reveal>
            <p className="eyebrow">The waitlist</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Next drop is forty pieces</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              We cut in small runs so nothing is wasted. Leave your email and you'll hear before
              anyone else.
            </p>
            <div className="mt-9 flex justify-center">
              <Newsletter />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

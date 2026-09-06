import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import studio from "@/assets/studio.jpg";
import maker from "@/assets/maker.jpg";
import detail from "@/assets/transform-detail.jpg";
import pennine from "@/assets/product-pennine.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Atelier Vessel" },
      {
        name: "description",
        content:
          "How a missed train became a British atelier making convertible garments — our founder, our makers, and sustainability through versatility.",
      },
      { property: "og:title", content: "Our Story — Atelier Vessel" },
      {
        property: "og:description",
        content: "A British atelier making convertible garments, cut in small runs in London.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-3xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Our story</p>
          <h1 className="mt-5 text-4xl md:text-6xl">
            We make fewer clothes and ask more of them
          </h1>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>
              Atelier Vessel started in a rented studio above a print shop in Bethnal Green, with
              one machine, a roll of Irish linen and a problem I could not stop thinking about.
            </p>
            <p>
              I was working long days and going out most evenings, and I had begun to resent the
              second outfit in the bag. It felt like a design failure rather than a life
              inconvenience. Why should a garment only know how to be one thing?
            </p>
            <p>
              The first Meridian took eleven attempts. Ten of them fell badly, or held a crease
              where a crease should never live. The eleventh went from a collarless shirt to a full
              midi dress in about thirty seconds, standing up, without a mirror. I wore it that
              night and have not really stopped since.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="grain overflow-hidden rounded-2xl">
            <img
              src={studio}
              alt="Inside the Atelier Vessel studio in east London"
              loading="lazy"
              width={1600}
              height={1067}
              className="w-full object-cover"
            />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            The bench where every pattern is worked twice — once as itself, once as what it becomes.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">British craftsmanship</p>
            <h2 className="mt-5 text-3xl md:text-4xl">Three mills, one bench</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Our wool comes from Yorkshire, our lambswool from County Donegal, and our knitwear
                is hand-framed in Hawick by a family who have been doing it for four decades.
              </p>
              <p>
                Cutting and finishing happens here in London, by five people whose names are on the
                inside of every garment. We pay for the hours it actually takes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Sustainability through versatility</p>
            <h2 className="mt-5 text-3xl md:text-4xl">A wardrobe that divides by three</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                We do not talk much about offsetting. Our argument is simpler: if one garment does
                the work of three, you buy fewer, and fewer is the only figure that really moves.
              </p>
              <p>
                Everything is cut in runs of forty or fewer. We repair anything we made, for as long
                as we exist, and we will re-cut a garment to a new size where the cloth allows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fabric border-y border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grain overflow-hidden rounded-2xl">
              <img
                src={maker}
                alt="Portrait of our founder in the studio, holding cloth"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Meet the maker</p>
            <h2 className="mt-5 text-3xl md:text-4xl">Helen Marchant, founder and cutter</h2>
            <blockquote className="mt-7 border-l border-champagne/50 pl-6 text-xl leading-relaxed text-bone italic">
              "People expect a trick. There isn't one. There's a placket, two hooks and a lot of
              arguing with the cloth until it agrees."
            </blockquote>
            <p className="mt-6 text-muted-foreground">
              Helen trained in Savile Row tailoring before spending nine years in womenswear
              patterns. She still cuts every first sample herself, usually on a Sunday, usually with
              the radio on.
            </p>
            <Link to="/how-it-transforms" className="btn-soft mt-9">
              See how it works
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {[detail, pennine].map((src, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="grain overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt="Behind the scenes at the studio"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { journal } from "@/lib/catalogue";
import meridian from "@/assets/product-meridian.jpg";
import ardent from "@/assets/product-ardent.jpg";
import studio from "@/assets/studio.jpg";
import maker from "@/assets/maker.jpg";
import detail from "@/assets/transform-detail.jpg";
import pennine from "@/assets/product-pennine.jpg";

const strip = [meridian, studio, ardent, detail, pennine, maker];

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.includes("@")) {
          toast.error("That email doesn't look quite right.");
          return;
        }
        setEmail("");
        toast.success("You're on the list. We write rarely, and only when there's something to say.");
      }}
      className={`flex w-full max-w-md flex-col gap-3 sm:flex-row ${compact ? "" : "sm:items-center"}`}
    >
      <label className="sr-only" htmlFor={compact ? "footer-email" : "hero-email"}>
        Email address
      </label>
      <input
        id={compact ? "footer-email" : "hero-email"}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full rounded-full border border-input bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-champagne focus:outline-none"
      />
      <button type="submit" className="btn-soft shrink-0">
        Join
      </button>
    </form>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="grid grid-cols-3 gap-px sm:grid-cols-6">
        {strip.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden"
          >
            <img
              src={src}
              alt="From our Instagram"
              loading="lazy"
              className="size-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-2xl">Letters from the studio</h3>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Fitting notes, new cloth, the odd invitation. Roughly once a month.
            </p>
            <div className="mt-6">
              <Newsletter compact />
            </div>
          </div>

          <div>
            <p className="eyebrow">Shop</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/shop" className="link-quiet">
                  All garments
                </Link>
              </li>
              <li>
                <Link to="/how-it-transforms" className="link-quiet">
                  How it transforms
                </Link>
              </li>
              <li>
                <Link to="/account" className="link-quiet">
                  Your account
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="link-quiet">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Read</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/story" className="link-quiet">
                  Our story
                </Link>
              </li>
              {journal.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    to="/journal/$slug"
                    params={{ slug: entry.slug }}
                    className="link-quiet"
                  >
                    {entry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Details</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/legal/shipping" className="link-quiet">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/legal/returns" className="link-quiet">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="link-quiet">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-quiet">
                  Stockists
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-soft mt-14 flex flex-col gap-3 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Atelier Vessel, London E2. Made in Britain.</p>
          <p>Demo site — prices and stories are illustrative.</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { gbp } from "@/lib/catalogue";

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, remove } = useCart();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />
      <aside
        aria-label="Your bag"
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-border bg-card transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <p className="eyebrow">Your bag</p>
          <button onClick={() => setOpen(false)} aria-label="Close bag" className="link-quiet">
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-display text-2xl">Nothing here yet</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Start with one garment. It will do the work of three.
              </p>
              <Link to="/shop" onClick={() => setOpen(false)} className="btn-soft mt-8">
                Browse the collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {lines.map((line) => (
                <li key={`${line.slug}-${line.size}`} className="flex gap-4 py-6">
                  <img
                    src={line.image}
                    alt={line.name}
                    loading="lazy"
                    className="h-28 w-20 rounded-md object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="font-display text-xl leading-tight">{line.name}</p>
                    <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                      Size {line.size} · Qty {line.qty}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-sm text-champagne">{gbp(line.price * line.qty)}</span>
                      <button
                        onClick={() => remove(line.slug, line.size)}
                        className="link-quiet text-xs tracking-[0.14em] uppercase"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 ? (
          <div className="border-t border-border px-6 py-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-champagne">{gbp(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Complimentary UK delivery. Duties calculated at checkout.
            </p>
            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              className="btn-solid mt-6 w-full"
            >
              Checkout
            </Link>
          </div>
        ) : null}
      </aside>
    </>
  );
}

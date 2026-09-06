import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./catalogue";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  qty: number;
};

type CartValue = {
  lines: CartLine[];
  open: boolean;
  count: number;
  subtotal: number;
  setOpen: (open: boolean) => void;
  add: (product: Product, size: string) => void;
  remove: (slug: string, size: string) => void;
};

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartValue>(() => {
    const add = (product: Product, size: string) => {
      setLines((prev) => {
        const found = prev.find((l) => l.slug === product.slug && l.size === size);
        if (found) {
          return prev.map((l) =>
            l === found ? { ...l, qty: l.qty + 1 } : l,
          );
        }
        return [
          ...prev,
          {
            slug: product.slug,
            name: product.name,
            price: product.price,
            size,
            image: product.image,
            qty: 1,
          },
        ];
      });
      setOpen(true);
    };

    const remove = (slug: string, size: string) =>
      setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size)));

    return {
      lines,
      open,
      setOpen,
      add,
      remove,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.price, 0),
    };
  }, [lines, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

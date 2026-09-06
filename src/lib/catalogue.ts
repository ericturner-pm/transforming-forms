import meridian from "@/assets/product-meridian.jpg";
import halcyon from "@/assets/product-halcyon.jpg";
import lowell from "@/assets/product-lowell.jpg";
import ardent from "@/assets/product-ardent.jpg";
import pennine from "@/assets/product-pennine.jpg";
import sable from "@/assets/product-sable.jpg";
import kestrel from "@/assets/product-kestrel.jpg";
import ivory from "@/assets/product-ivory.jpg";
import studio from "@/assets/studio.jpg";
import detail from "@/assets/transform-detail.jpg";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";

export type Category = "Shirts" | "Dresses" | "Outerwear" | "Knitwear";

export type Product = {
  slug: string;
  name: string;
  price: number;
  blurb: string;
  category: Category;
  convertible: boolean;
  becomes: string;
  image: string;
  hoverImage: string;
  gallery: string[];
  fabric: string;
  bestSeller?: boolean;
};

export const products: Product[] = [
  {
    slug: "meridian-shirtdress",
    name: "The Meridian",
    price: 395,
    blurb: "A collarless linen shirt that lengthens into a full midi dress.",
    category: "Shirts",
    convertible: true,
    becomes: "Shirt → Midi dress",
    image: meridian,
    hoverImage: ivory,
    gallery: [meridian, ivory, detail],
    fabric: "Washed Irish linen, 210gsm",
    bestSeller: true,
  },
  {
    slug: "halcyon-trench",
    name: "The Halcyon",
    price: 795,
    blurb: "A long trench with release seams that fold back into a tailored gilet.",
    category: "Outerwear",
    convertible: true,
    becomes: "Trench → Gilet",
    image: halcyon,
    hoverImage: kestrel,
    gallery: [halcyon, kestrel, studio],
    fabric: "Dry-waxed British cotton twill",
    bestSeller: true,
  },
  {
    slug: "lowell-wrap",
    name: "The Lowell",
    price: 285,
    blurb: "A silk wrap blouse that reties as a soft camisole or a headscarf.",
    category: "Shirts",
    convertible: true,
    becomes: "Blouse → Camisole",
    image: lowell,
    hoverImage: ivory,
    gallery: [lowell, ivory, detail],
    fabric: "Sandwashed mulberry silk",
  },
  {
    slug: "ardent-slip",
    name: "The Ardent",
    price: 340,
    blurb: "A bias slip that unbuttons at the waist to become a separate skirt.",
    category: "Dresses",
    convertible: true,
    becomes: "Slip dress → Skirt",
    image: ardent,
    hoverImage: sable,
    gallery: [ardent, sable, detail],
    fabric: "Cupro-silk blend, bias cut",
    bestSeller: true,
  },
  {
    slug: "pennine-cape",
    name: "The Pennine",
    price: 460,
    blurb: "A hand-framed cape that clips down into a sleeved knit dress.",
    category: "Knitwear",
    convertible: true,
    becomes: "Cape → Knit dress",
    image: pennine,
    hoverImage: meridian,
    gallery: [pennine, meridian, studio],
    fabric: "Donegal lambswool, hand-framed in Hawick",
  },
  {
    slug: "sable-column",
    name: "The Sable",
    price: 520,
    blurb: "An evening column that shortens to a cocktail length in one fold.",
    category: "Dresses",
    convertible: true,
    becomes: "Gown → Cocktail dress",
    image: sable,
    hoverImage: ardent,
    gallery: [sable, ardent, detail],
    fabric: "Double-faced wool crepe",
  },
  {
    slug: "kestrel-jacket",
    name: "The Kestrel",
    price: 680,
    blurb: "A soft-shouldered jacket whose sleeves detach into a waistcoat.",
    category: "Outerwear",
    convertible: true,
    becomes: "Jacket → Waistcoat",
    image: kestrel,
    hoverImage: halcyon,
    gallery: [kestrel, halcyon, studio],
    fabric: "Yorkshire wool flannel",
  },
  {
    slug: "ivory-field-shirt",
    name: "The Field Shirt",
    price: 250,
    blurb: "An oversized cotton shirt cut long enough to wear as a dress.",
    category: "Shirts",
    convertible: false,
    becomes: "Worn two ways",
    image: ivory,
    hoverImage: lowell,
    gallery: [ivory, lowell, detail],
    fabric: "Organic cotton poplin",
  },
];

export const bestSellers = products.filter((p) => p.bestSeller);

export const findProduct = (slug: string) => products.find((p) => p.slug === slug);

export const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
  }).format(n);

export type JournalEntry = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const journal: JournalEntry[] = [
  {
    slug: "one-coat-three-nights",
    title: "One Coat, Three Nights",
    kicker: "Lookbook — Autumn",
    date: "October 2025",
    excerpt:
      "We took the Halcyon out across three evenings in Marylebone and asked it to be a different thing each time.",
    image: journal1,
    body: [
      "It rained for most of the shoot, which we had quietly hoped for. Wax cotton looks its best wet.",
      "On the first night the Halcyon was a full-length coat. On the second we folded the release seams back and it sat like a gilet over knitwear. On the third we belted it closed and it read as a dress.",
      "Nothing was added between looks. That is the whole point of the collection, and it is easier to show than to explain.",
    ],
  },
  {
    slug: "packing-for-four-days",
    title: "Packing For Four Days With One Garment",
    kicker: "Journal — Travel",
    date: "August 2025",
    excerpt:
      "A note on how our studio manager travels: one bag, one dress, four very different rooms.",
    image: journal2,
    body: [
      "Ruth has done this trip for six years. Edinburgh, then Glasgow, then home. She takes the Ardent and very little else.",
      "Worn long it carries a dinner. Unbuttoned at the waist it becomes a skirt for the daytime, paired with whatever shirt is nearest.",
      "She calls it lazy. We call it the argument for the whole brand.",
    ],
  },
  {
    slug: "on-choosing-cloth",
    title: "On Choosing Cloth That Can Move Twice",
    kicker: "Journal — Craft",
    date: "June 2025",
    excerpt:
      "Convertible garments ask more of a fabric. Here is how we test one before it earns a place.",
    image: journal3,
    body: [
      "A cloth that only falls one way is no use to us. We need it to hold a fold and then forget it.",
      "Every swatch is worked by hand at the studio bench: folded, released, pressed, folded again. Most fail. The ones that stay have a memory soft enough to be undone.",
      "Our mills are in Yorkshire, Hawick and County Donegal. We have never had to look further.",
    ],
  },
];

export const findEntry = (slug: string) => journal.find((e) => e.slug === slug);

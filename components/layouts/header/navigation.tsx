import Link from "next/link";
import { Item } from "./navigation.types";

const items: Item[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
];

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

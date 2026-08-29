"use client";
import { Heart, Moon } from "lucide-react";

import ShoppingCard from "./cart/cart-sheet";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="rounded-lg p-2 transition hover:bg-muted"
        aria-label="Toggle theme"
      >
        <Moon size={20} />
      </button>

      <button
        type="button"
        className="rounded-lg p-2 transition hover:bg-muted"
        aria-label="Wishlist"
      >
        <Heart size={20} />
      </button>

      <ShoppingCard />
    </div>
  );
}

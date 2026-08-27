"use client";
import { useCartStore } from "@/stores/cart/cart-store";
import { Heart, Moon, ShoppingCart } from "lucide-react";

export default function ActionButtons() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex items-center gap-2">
      <button className="rounded-lg p-2 transition hover:bg-muted">
        <Moon size={20} />
      </button>

      <button className="rounded-lg p-2 transition hover:bg-muted">
        <Heart size={20} />
      </button>

      <button className="relative rounded-lg p-2 transition hover:bg-muted">
        <ShoppingCart size={20} />
        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}

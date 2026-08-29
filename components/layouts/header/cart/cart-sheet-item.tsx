"use client";
import { useCartStore } from "@/stores/cart/cart-store";
import { CartItem } from "@/stores/cart/cart.types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartSheetItemProps {
  item: CartItem;
}
export default function CartSheetItem({ item }: CartSheetItemProps) {
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);

  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex-1 space-y-5 overflow-y-auto py-5 px-4">
      <div key={item.id} className="flex gap-4 border-b pb-5 last:border-0">
        <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-muted">
          <Image
            src={item.thumbnail}
            alt={item.title}
            className="size-full object-cover"
            width={100}
            height={100}
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-sm font-medium">{item.title}</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            ${item.price.toFixed(2)}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center rounded-lg border overflow-hidden">
              <button
                type="button"
                className="px-2.5 py-1.5 text-sm transition hover:bg-muted"
                onClick={() => decrementQuantity(item.id)}
                aria-label={`Decrease ${item.title} quantity`}
              >
                −
              </button>

              <span className="min-w-8 text-center text-sm">
                {item.quantity}
              </span>

              <button
                type="button"
                className="px-2.5 py-1.5 text-sm transition hover:bg-muted"
                onClick={() => incrementQuantity(item.id)}
                aria-label={`Increase ${item.title} quantity`}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="rounded-md p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              onClick={() => removeFromCart(item.id)}
              aria-label={`Remove ${item.title}`}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart/cart-store";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import QuantitySelector from "../quantity-selector";
import RemoveButton from "../remove-button";

export type SizeButton =
  | "default"
  | "icon"
  | "icon-lg"
  | "icon-sm"
  | "icon-xs"
  | "lg"
  | "sm"
  | "xs";

interface ProductCardActionsProps {
  product: Product;
  size?: SizeButton;
  className?: string;
}

export default function ProductCardActions({
  product,
  className,
  size = "default",
}: ProductCardActionsProps) {
  const item = useCartStore((state) =>
    state.items.find((item) => item.id === product.id),
  );

  const addToCart = useCartStore((state) => state.addToCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (!item) {
    return (
      <Button
        size={size}
        className={cn("w-full", className)}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    );
  }

  return (
    <>
      <QuantitySelector
        quantity={item.quantity}
        onIncrease={() => incrementQuantity(item.id)}
        onDecrease={() => decrementQuantity(item.id)}
        max={item.stock}
      />
      <RemoveButton
        onClick={() => removeFromCart(item.id)}
        label={`Remove ${item.title}`}
      />
    </>
  );
}

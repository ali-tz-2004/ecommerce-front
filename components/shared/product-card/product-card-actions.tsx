"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart/cart-store";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

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
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      size={size}
      className={cn("w-full", className)}
      onClick={() => {
        addToCart(product);
      }}
    >
      Add to Cart
    </Button>
  );
}

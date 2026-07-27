import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";

interface ProductCardImageProps {
  title: string;
  thumbnail: string;
  discountPercentage?: number;
}

export default function ProductCardImage({
  title,
  thumbnail,
  discountPercentage,
}: ProductCardImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden bg-muted">
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover transition duration-300 group-hover:scale-105"
      />

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-3 top-3"
      >
        <Heart className="size-4" />
      </Button>

      {discountPercentage && (
        <span className="absolute left-3 top-3 rounded-md bg-destructive px-2 py-1 text-xs font-semibold text-primary-foreground">
          -{Math.round(discountPercentage)}%
        </span>
      )}
    </div>
  );
}

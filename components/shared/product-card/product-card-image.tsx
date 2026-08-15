import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardImageProps {
  id: number;
  title: string;
  thumbnail: string;
  discountPercentage?: number;
}

export default function ProductCardImage({
  id,
  title,
  thumbnail,
  discountPercentage,
}: ProductCardImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden bg-muted">
      <Link href={`/products/${id}`}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

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

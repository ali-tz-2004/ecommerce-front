import { Card, CardContent, CardFooter } from "@/components/ui/card";

import ProductCardActions from "./product-card-actions";
import ProductCardImage from "./product-card-image";
import ProductCardPrice from "./product-card-price";
import ProductCardRating from "./product-card-rating";
import { ProductCardProps } from "./product-card.types";
import Link from "next/link";

export default function ProductCard({
  id,
  title,
  category,
  thumbnail,
  price,
  rating,
  discountPercentage,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <ProductCardImage
        id={id}
        title={title}
        thumbnail={thumbnail}
        discountPercentage={discountPercentage}
      />

      <Link href={`/products/${id}`}>
        <CardContent className="space-y-3 pt-5">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {category}
          </p>

          <h3 className="line-clamp-2 font-semibold">{title}</h3>

          <ProductCardRating rating={rating} />

          <ProductCardPrice
            price={price}
            discountPercentage={discountPercentage}
          />
        </CardContent>
      </Link>

      <CardFooter>
        <ProductCardActions />
      </CardFooter>
    </Card>
  );
}

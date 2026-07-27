import { Card, CardContent, CardFooter } from "@/components/ui/card";

import ProductCardActions from "./product-card-actions";
import ProductCardImage from "./product-card-image";
import ProductCardPrice from "./product-card-price";
import ProductCardRating from "./product-card-rating";
import { ProductCardProps } from "./product-card.types";

export default function ProductCard({
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
        title={title}
        thumbnail={thumbnail}
        discountPercentage={discountPercentage}
      />

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

      <CardFooter>
        <ProductCardActions />
      </CardFooter>
    </Card>
  );
}

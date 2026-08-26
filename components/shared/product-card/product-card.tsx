import { Card, CardContent, CardFooter } from "@/components/ui/card";

import ProductCardActions from "./product-card-actions";
import ProductCardImage from "./product-card-image";
import ProductCardPrice from "./product-card-price";
import ProductCardRating from "./product-card-rating";
import { ProductCardProps } from "./product-card.types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <ProductCardImage
        id={data.id}
        title={data.title}
        thumbnail={data.thumbnail}
        discountPercentage={data.discountPercentage}
      />

      <Link href={`/products/${data.id}`}>
        <CardContent className="space-y-3 pt-5">
          <Badge className="w-fit">{data.category}</Badge>

          <h3 className="line-clamp-2 font-semibold">{data.title}</h3>

          <ProductCardRating rating={data.rating} />

          <ProductCardPrice
            price={data.price}
            discountPercentage={data.discountPercentage}
          />
        </CardContent>
      </Link>

      <CardFooter>
        <ProductCardActions product={data} />
      </CardFooter>
    </Card>
  );
}

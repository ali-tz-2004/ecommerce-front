import { Product } from "@/types/product";
import Image from "next/image";

interface ProductGalleryProps {
  data: Product;
}

export default function ProductGallery({ data }: ProductGalleryProps) {
  return (
    <div className="rounded-3xl border bg-card p-8">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          className="object-contain p-8"
        />
      </div>
    </div>
  );
}

export interface ProductCardProps {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  price: number;
  rating: number;
  discountPercentage?: number;
}

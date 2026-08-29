import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CartSheetSummaryProps {
  subtotal: number;
}
export function CartSheetSummary({ subtotal }: CartSheetSummaryProps) {
  return (
    <div className="space-y-4 border-t py-5 px-4">
      <div className="flex items-center justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <Link href="/cart">
        <Button className="w-full">View Cart</Button>
      </Link>
    </div>
  );
}

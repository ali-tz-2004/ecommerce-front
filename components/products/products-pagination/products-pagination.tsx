import { Button } from "@/components/ui/button";
import { ProductsPaginationProps } from "./products-pagination.types";

export default function ProductsPagination({
  currentPage,
  totalPages,
}: ProductsPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <Button variant="outline">Previous</Button>

      <span className="text-sm font-medium text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      <Button variant="outline">Next</Button>
    </div>
  );
}

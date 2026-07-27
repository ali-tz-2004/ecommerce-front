import { Button } from "@/components/ui/button";

import { ProductPaginationProps } from "./product-pagination.types";
import Container from "@/components/ui/container";

export default function ProductPagination({
  currentPage,
  totalPages,
}: ProductPaginationProps) {
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

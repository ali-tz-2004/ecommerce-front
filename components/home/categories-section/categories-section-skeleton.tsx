import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesSectionSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="rounded-xl border p-8 text-center">
          <Skeleton className="mx-auto h-5 w-24" />
        </div>
      ))}
    </div>
  );
}

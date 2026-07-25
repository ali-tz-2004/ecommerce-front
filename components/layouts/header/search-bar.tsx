import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />

      <input
        type="text"
        placeholder="Search products..."
        className="h-10 w-full rounded-lg border bg-background pl-10 pr-4 outline-none transition focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

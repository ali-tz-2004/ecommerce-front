import { Heart, Moon, ShoppingCart } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      <button className="rounded-lg p-2 transition hover:bg-muted">
        <Moon size={20} />
      </button>

      <button className="rounded-lg p-2 transition hover:bg-muted">
        <Heart size={20} />
      </button>

      <button className="rounded-lg p-2 transition hover:bg-muted">
        <ShoppingCart size={20} />
      </button>
    </div>
  );
}

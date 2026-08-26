import { Product } from "@/types/product";
import { create } from "zustand";
import { CartState } from "./cart.types";
import { removeItem } from "./cart.utils";

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (product: Product) => {
    set((state) => {
      const exists = state.items.some((x) => x.id === product.id);
      if (exists) {
        const result = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return { items: result };
      }
      const result = [
        ...state.items,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          thumbnail: product.thumbnail,
        },
      ];
      return { items: result };
    });
  },
  removeFromCart: (productId: number) => {
    set((state) => {
      return { items: removeItem(state.items, productId) };
    });
  },
  incrementQuantity: (productId: number) => {
    set((state) => {
      const result = state.items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
      return { items: result };
    });
  },
  decrementQuantity: (productId: number) => {
    set((state) => {
      const item = state.items.find((item) => item.id === productId);

      if (!item) {
        return { items: state.items };
      }

      if (item.quantity === 1) {
        return {
          items: removeItem(state.items, productId),
        };
      }

      const result = state.items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );

      return { items: result };
    });
  },
  clearCart: () => {
    set({ items: [] });
  },
}));

import { Product } from "@/types/product";
import { create } from "zustand";
import { FavoriteState } from "./favorite.types";

export const useFavoriteStore = create<FavoriteState>((set) => ({
  items: [],
  addFavorite: (product: Product) => {
    set((state) => {
      const exists = state.items.some((x) => x.id === product.id);
      if (exists) return { items: state.items };
      const result = [...state.items, product];
      return { items: result };
    });
  },
  removeFavorite: (productId: number) => {
    set((state) => {
      const result = state.items.filter((x) => x.id !== productId);
      return { items: result };
    });
  },
  clearFavorite: () => {
    set({ items: [] });
  },
}));

// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ProductType } from "../types/ProductType";

const fetchProducts = async (): Promise<ProductType[]> => {
  const res = await axios.get<ProductType[]>(
    "http://localhost:3000/api/products",
  );

	if (res.status !== 200) {
          throw new Error("Failed to fetch products");
    }

  return res.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

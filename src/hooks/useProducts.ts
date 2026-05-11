// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ProductType } from "../types/ProductType";

const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await axios.get<ProductType[]>(
    "http://localhost:3000/api/products",
  );

  return response.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

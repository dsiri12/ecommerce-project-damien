// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ProductType } from "../types/ProductType";

const fetchProducts = async (): Promise<ProductType[]> => {
  try {
    const res = await axios.get("/api/products");

    if (res.status !== 200) {
      throw new Error("Failed to fetch products");
    }

    return res.data;
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,

    staleTime: Infinity,
    gcTime: Infinity,
  });
};

/*
Full Flow:

Component calls useProducts()
useQuery() runs
React Query checks cache
If no cache:
runs fetchProducts
Axios sends request
Products returned
React Query stores cache
Component receives data
UI updates automatically
*/

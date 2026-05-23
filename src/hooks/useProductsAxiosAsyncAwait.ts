import { useEffect, useState } from "react";
import type { ProductType } from "../types/ProductType";
import axios from "axios";

export const useProductsAxiosAsyncAwait = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products");

        if (res.status !== 200) {
          throw new Error("Failed to fetch products");
        }

        setProducts(res.data);
      } catch (err: unknown) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return { data: products };
};

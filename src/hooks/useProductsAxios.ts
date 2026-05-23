import { useEffect, useState } from "react";
import type { ProductType } from "../types/ProductType";
import axios from "axios";

export const useProductsAxios = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get<ProductType[]>("http://localhost:3000/api/products")
      .then((res) => {
         if (res.status !== 200) {
          throw new Error("Failed to fetch products")
        }

        setProducts(res.data);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  return { data: products };
};

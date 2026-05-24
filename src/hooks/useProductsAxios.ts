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

/*
Full Flow:

Component calls useProductsAxios()
State starts as []
useEffect runs once
Axios sends GET request
Server returns products
Axios converts JSON automatically
setProducts() updates state
Component re-renders with products
*/
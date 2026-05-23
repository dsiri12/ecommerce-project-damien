import {useState, useEffect} from "react"
import type {ProductType} from "../types/ProductType"

export const useProductsFetch = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        return res.json();
      })
      .then((data: ProductType[]) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  return {data: products}
}
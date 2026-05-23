import { useState, useEffect } from "react"
import type { ProductType } from "../types/ProductType"

export const useProductsFetchAsyncAwait = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products")
        if (res.status !== 200) {
          throw new Error(`Error ${res.status}: ${res.statusText}`)
        }

        const data: ProductType[] = await res.json()
        setProducts(data)

      } catch (err: unknown) {
        console.error(err)
      }
    }

    fetchProducts()
  }, [])


  return {data: products}

}

/*
Component renders
       ↓
useEffect runs
       ↓
fetchProducts() called
       ↓
fetch() sends request
       ↓
response received
       ↓
JSON converted
       ↓
setProducts(data)
       ↓
Component re-renders with products
*/
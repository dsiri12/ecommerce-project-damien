import { useQuery } from "@tanstack/react-query"
import type { CartItemType } from "../types/CartItemType"
import axios from "axios";

const fetchCartItems = async (): Promise<CartItemType[]> => {
  try {
    const res = await axios.get("/api/cart-items?expand=product");

    if (res.status !== 200) {
      throw new Error("Failed to fetch cart items");
    }

    return res.data;
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}

export const useCartItems = () => {
  return useQuery({
    queryKey: ["cartItems"],
    queryFn: fetchCartItems
  })
}

/*
Flow of Execution:

Component renders  (Header component calls useCartItems to show cart count in header ):
       ↓
useCartItems() called
       ↓
useQuery executes queryFn
       ↓
fetchCartItems() runs
       ↓
Axios sends GET request
       ↓
Data returned
       ↓
React Query caches result
       ↓
Component re-renders with data
*/
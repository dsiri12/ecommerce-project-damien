import { useQuery } from "@tanstack/react-query"
import type { CartItemType } from "../types/CartItemType"
import axios from "axios";

const fetchCartItems = async (): Promise<CartItemType[]> => {
  try {
    const res = await axios.get("http://localhost:3000/api/cart-items");

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
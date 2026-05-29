import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import type { OrderType } from "../types/OrderType";

const fetchOrders = async (): Promise<OrderType[]> => {
  try {
    const res = await axios.get("/api/orders");
    
    if (res.status !== 200) {
      throw new Error("Failed to fetch orders");
    }

    return res.data;
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  })
}

/*
Flow of Execution:

Component renders
       ↓
useOrders() called
       ↓
useQuery starts query
       ↓
fetchOrders() runs
       ↓
Axios sends request
       ↓
Server responds
       ↓
Data returned
       ↓
React Query caches data
       ↓
Component re-renders
*/
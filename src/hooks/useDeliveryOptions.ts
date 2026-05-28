

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { DeliveryOptionType } from "../types/DeliveryOptionType";

const fetchDeliveryOptions = async (): Promise<DeliveryOptionType[]> => {
  try {
    const res = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');

    if (res.status !== 200) {
      throw new Error(`Failed to fetch delivery options`)
    }

    return res.data;

  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
};

export const useDeliveryOptions = () => {
  return useQuery({
    queryKey: ['delivery-options'],
    queryFn: fetchDeliveryOptions,

    staleTime: Infinity,
    gcTime: Infinity,

    // Disable caching
    // staleTime: 0,
    // gcTime: 0,

    // // Always refetch
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
  })
};

/*
Full Flow:

Component calls useDeliveryOptions()
React Query checks cache
If not cached:
runs fetchDeliveryOptions
Axios sends request
Backend returns delivery options
Data stored in React Query cache
Components receive cached data
Future components reuse same cache instantly
*/

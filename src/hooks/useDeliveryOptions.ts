

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
  })
};

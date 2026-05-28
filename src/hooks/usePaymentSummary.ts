import {useQuery} from "@tanstack/react-query"
import type { PaymentSummaryType } from "../types/PaymentSummaryType";
import axios from "axios";

const fetchPaymentSummary = async (): Promise<PaymentSummaryType> => {
  try {
    const res = await axios.get("/api/payment-summary");

    if (res.status !== 200) {
      throw new Error("Failed to fetch payment summary");
    }

    return res.data;
  } catch (err: unknown) {
    console.error(err);
    throw err;
  }
}

export const usePaymentSummary = () => {
  return useQuery({
    queryKey: ['payment-summary'],
    queryFn: fetchPaymentSummary,
  })
}
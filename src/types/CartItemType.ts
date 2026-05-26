import type { ProductType } from "./ProductType";

 export type CartItemType = {
    id: number;
    productId: string;
    quantity: number;
    deliveryOptionId: string;
    product: ProductType;

    // createdAt: string;
    // updatedAt: string;
}

/*
const  cartItem = {
    "id": 1,
    "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    "quantity": 2,
    "deliveryOptionId": "1",
    "createdAt": "2026-05-08T17:48:50.800Z",
    "updatedAt": "2026-05-08T17:48:50.800Z"
  }
*/
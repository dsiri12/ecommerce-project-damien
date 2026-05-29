export type OrderType = {
    id: string;
    orderTimeMs: number;
    totalCostCents: number;
    products: {
        productId: string;
        quantity: number;
        estimatedDeliveryTimeMs: number;
    }[];
    createdAt: string;
    updatedAt: string;
}

/*
const orderData: OrderType =   {
    "id": "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
    "orderTimeMs": 1723456800000,
    "totalCostCents": 3506,
    "products": [
      {
        "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        "quantity": 1,
        "estimatedDeliveryTimeMs": 1723716000000
      },
      {
        "productId": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        "quantity": 2,
        "estimatedDeliveryTimeMs": 1723456800000
      }
    ],
    "createdAt": "2026-05-08T17:48:50.800Z",
    "updatedAt": "2026-05-08T17:48:50.800Z"
  }
    */
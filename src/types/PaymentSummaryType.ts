export type PaymentSummaryType = {
    totalItems: number;
    productCostCents: number;
    shippingCostCents: number;
    totalCostBeforeTaxCents: number;
    taxCents: number;
    totalCostCents: number;
}

/*
const paymentSummary: PaymentSummaryType = {
  "totalItems": 3,
  "productCostCents": 4275,
  "shippingCostCents": 499,
  "totalCostBeforeTaxCents": 4774,
  "taxCents": 477,
  "totalCostCents": 5251
}
  */
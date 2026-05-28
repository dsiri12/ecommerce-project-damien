import { usePaymentSummary } from "../../hooks/usePaymentSummary";
import { formatMoney } from "../../utils/money";


export const PaymentSummary = () => {
  const { data: paymentSummary } = usePaymentSummary();

  if (!paymentSummary) {
    return <></>
  }

  const {totalItems, productCostCents, shippingCostCents, totalCostBeforeTaxCents, taxCents, totalCostCents} = paymentSummary;

  return ( 
            <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            <div className="payment-summary-row">
              <div>Items ({totalItems}):</div>
              <div className="payment-summary-money">{formatMoney(productCostCents)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">{formatMoney(shippingCostCents)}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">{formatMoney(totalCostBeforeTaxCents)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">{formatMoney(taxCents)}</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">{formatMoney(totalCostCents)}</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
        </div>
   );
}
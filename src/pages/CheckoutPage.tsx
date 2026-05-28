import { CartItemCard } from '../components/checkout/CartItemCard';
import { useCartItems } from '../hooks/useCartItems';
import './checkout-header.css';
import './CheckoutPage.css';
import { PaymentSummary } from '../components/checkout/PaymentSummary';
import { usePaymentSummary } from '../hooks/usePaymentSummary';

export const CheckoutPage = () => {
  const { data: cartItems } = useCartItems();
  const { data: paymentSummary } = usePaymentSummary();

  return ( 
    <>
      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link"
              href="/">{paymentSummary?.totalItems ?? 0} items</a>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cartItems?.map((cartItem) => {
              return <CartItemCard key={cartItem.id} cartItem={cartItem} />;
            })}
          </div>

          <PaymentSummary />
        </div>
      </div>
    </>
  );
}
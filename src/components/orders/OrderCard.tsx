import type { OrderType } from "../../types/OrderType";

type Props = {
  order: OrderType;
}

export const OrderCard = ({ order }: Props) => {


  return (
    <div className="order-container">
      <div className="order-header">
        <div className="order-header-left-section">
          <div className="order-date">
            <div className="order-header-label">Order Placed:</div>
            <div>August 12</div>
          </div>
          <div className="order-total">
            <div className="order-header-label">Total:</div>
            <div>$35.06</div>
          </div>
        </div>

        <div className="order-header-right-section">
          <div className="order-header-label">Order ID:</div>
          <div>{order.id}</div>
        </div>
      </div>

      <div className="order-details-grid">
        <>
          <div className="product-image-container">
            <img src="images/products/athletic-cotton-socks-6-pairs.jpg" />
          </div>

          <div className="product-details">
            <div className="product-name">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>
            <div className="product-delivery-date">Arriving on: August 15</div>
            <div className="product-quantity">Quantity: 1</div>
            <button className="buy-again-button button-primary">
              <img
                className="buy-again-icon"
                src="images/icons/buy-again.png"
              />
              <span className="buy-again-message">Add to Cart</span>
            </button>
          </div>

          <div className="product-actions">
            <a href="/tracking">
              <button className="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>
        </>
      </div>
    </div>
  );
};

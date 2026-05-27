import type { CartItemType } from "../../types/CartItemType";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";

type Props = {
  cartItem: CartItemType;
};
export const CartItemCard = ({ cartItem }: Props) => {
  const { quantity, product } = cartItem;
  const { name, image, priceCents } = product;

  return (
    <div className="cart-item-container">
      <div className="delivery-date">Delivery date: Tuesday, June 21</div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={image} />

        <div className="cart-item-details">
          <div className="product-name">{name}</div>
          <div className="product-price">{formatMoney(priceCents)}</div>
          <div className="product-quantity">
            <span>
              Quantity: <span className="quantity-label">{quantity}</span>
            </span>
            <span className="update-quantity-link link-primary">Update</span>
            <span className="delete-quantity-link link-primary">Delete</span>
          </div>
        </div>

        <DeliveryOptions cartItem={cartItem} />
      </div>
    </div>
  );
};

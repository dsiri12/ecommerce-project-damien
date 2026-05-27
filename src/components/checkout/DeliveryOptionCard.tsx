import type { CartItemType } from "../../types/CartItemType";
import type { DeliveryOptionType } from "../../types/DeliveryOptionType";
import { formatMoney } from "../../utils/money";

type Props = {
  cartItem: CartItemType;
  deliveryOption: DeliveryOptionType;
};
export const DeliveryOptionCard = ({ cartItem, deliveryOption }: Props) => {
  const { id, estimatedDeliveryTimeMs, priceCents } = deliveryOption;

  const formattedDate = new Date(estimatedDeliveryTimeMs).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
    },
  );

  let priceText = "FREE Shipping";

  if (priceCents > 0) {
    priceText = `${formatMoney(priceCents)} - Shipping`;
  }

  return (
    <div className="delivery-option">
      <input
        type="radio"
        checked={id === cartItem.deliveryOptionId}
        className="delivery-option-input"
        name={`delivery-option-${cartItem.productId}`}
      />

      <div>
        <div className="delivery-option-date">{formattedDate}</div>
        <div className="delivery-option-price">{priceText}</div>
      </div>
    </div>
  );
};

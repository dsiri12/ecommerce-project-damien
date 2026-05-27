import { useDeliveryOptions } from "../../hooks/useDeliveryOptions";
import type { CartItemType } from "../../types/CartItemType";
import { DeliveryOptionCard } from "./DeliveryOptionCard";

type Props = {
  cartItem: CartItemType;
};
export const DeliveryOptions = ({ cartItem }: Props) => {
  const { data: deliveryOptions } = useDeliveryOptions();

  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOptions?.map((deliveryOption) => {
        return (
          <DeliveryOptionCard
            key={deliveryOption.id}
            cartItem={cartItem}
            deliveryOption={deliveryOption}
          />
        );
      })}
    </div>
  );
};

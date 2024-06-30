import {
  RemoveCoffeeButton,
  SelectedCoffeeCardContainer,
  SelectedCoffeeCardContent,
  SelectedCoffeeCardSection,
  SelectedCoffeeCardTitle,
  SelectedCoffeeTotal,
} from "./styles";
import { Trash } from "phosphor-react";
import { CoffeeQtyButton } from "../../../../../components/CoffeeQtyButton";
import { ICoffee } from "../../../../../@types/coffee";
import { useShoppingCart } from "../../../../../hooks/use-shopping-cart";
import { currencyFormatter } from "../../../../../libs/currency-formatter";

interface SelectedItemCardProps extends ICoffee {}
export function SelectedItemCard({
  id,
  price,
  title,
  image,
}: SelectedItemCardProps) {
  const shoppingCart = useShoppingCart();
  const selectedItem = shoppingCart.cart.find((item) => item.id === id);

  if (!selectedItem) return null;

  const handleRemoveItem = () => shoppingCart.removeFromCart(id);

  const handleIncrementItem = () => {
    shoppingCart.incrementItemQuantity(id, 1);
  };

  const handleDecrementItem = () => {
    if (selectedItem.quantity > 1) {
      shoppingCart.decrementItemQuantity(id, 1);
    }
  };

  const totalPrice = selectedItem.quantity * price;

  return (
    <SelectedCoffeeCardContainer>
      <SelectedCoffeeCardContent>
        <img src={image} alt="" />

        <SelectedCoffeeCardSection>
          <SelectedCoffeeCardTitle>{title}</SelectedCoffeeCardTitle>
          <div>
            <CoffeeQtyButton
              value={selectedItem.quantity}
              onIncrement={handleIncrementItem}
              onDecrement={handleDecrementItem}
            />
            <RemoveCoffeeButton onClick={handleRemoveItem}>
              <Trash size={16} />
              Remover
            </RemoveCoffeeButton>
          </div>
        </SelectedCoffeeCardSection>
      </SelectedCoffeeCardContent>
      <SelectedCoffeeTotal>{currencyFormatter(totalPrice)}</SelectedCoffeeTotal>
    </SelectedCoffeeCardContainer>
  );
}

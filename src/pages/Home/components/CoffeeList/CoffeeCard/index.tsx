import { useState } from "react";
import { CoffeeQtyButton } from "../../../../../components/CoffeeQtyButton";
import {
  CoffeBuyContainer,
  CoffeTagsContainer,
  CoffeeBuy,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeImage,
  CoffeeSubtotal,
  CoffeeTag,
  ShoppingCartButton,
} from "./styles";
import { ShoppingCart, Trash } from "phosphor-react";
import { ICoffee } from "../../../../../@types/coffee";
import { useShoppingCart } from "../../../../../hooks/use-shopping-cart";
import { currencyFormatter } from "../../../../../libs/currency-formatter";

interface CoffeeCardProps extends ICoffee {}

export function CoffeeCard({
  id,
  image,
  title,
  description,
  price,
  tags,
}: CoffeeCardProps) {
  const shoppingCart = useShoppingCart();
  const selectedCoffee = shoppingCart.cart.find((coffee) => coffee.id === id);

  const [quantity, setQuantity] = useState(selectedCoffee?.quantity || 1);

  const handleIncrementQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrementQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleToggleSelectedCoffee = () => {
    if (selectedCoffee) {
      shoppingCart.removeFromCart(id);
      setQuantity(1);
    } else {
      shoppingCart.addToCart(id, quantity);
    }
  };

  return (
    <CoffeeCardContainer>
      <CoffeeImage src={image} alt={title} />
      <CoffeTagsContainer>
        {tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </CoffeTagsContainer>
      <CoffeeDescription>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </CoffeeDescription>

      <CoffeBuyContainer>
        <CoffeeSubtotal>
          <span>{currencyFormatter(price)}</span>
        </CoffeeSubtotal>
        <CoffeeBuy>
          <CoffeeQtyButton
            value={quantity}
            onIncrement={handleIncrementQty}
            onDecrement={handleDecrementQty}
          />
          <ShoppingCartButton onClick={handleToggleSelectedCoffee}>
            {selectedCoffee ? (
              <Trash weight="fill" />
            ) : (
              <ShoppingCart weight="fill" />
            )}
          </ShoppingCartButton>
        </CoffeeBuy>
      </CoffeBuyContainer>
    </CoffeeCardContainer>
  );
}

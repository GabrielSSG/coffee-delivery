import { Fragment } from "react/jsx-runtime";
import { useShoppingCart } from "../../../../hooks/use-shopping-cart";
import { coffeeList } from "../../../Home/data";
import { SelectedItemCard } from "./SelectedItemCard";
import {
  ConfirmOrderButton,
  ConfirmOrderCardContainer,
  OrderSubtotalItem,
  OrderTotal,
  OrderTotalContainer,
  Separator,
} from "./styles";
import { currencyFormatter } from "../../../../libs/currency-formatter";
import { EmptyCartContainer } from "./SelectedItemCard/styles";

export function ConfirmOrderCard() {
  const { cart } = useShoppingCart();

  const selectedItems = cart.map((item) => {
    const coffee = coffeeList.find((coffee) => coffee.id === item.id);

    if (!coffee) {
      throw Error("Coffe not found");
    }

    return {
      ...coffee,
      quantity: item.quantity,
    };
  });

  const shippingPrice = 3.5;
  const subTotal = selectedItems.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
  const total = subTotal + shippingPrice;

  return (
    <ConfirmOrderCardContainer>
      {selectedItems.length === 0 && (
        <EmptyCartContainer>Selecione os itens na sua cesta</EmptyCartContainer>
      )}
      {selectedItems.map((coffee) => (
        <Fragment key={coffee.id}>
          <SelectedItemCard {...coffee} />
          <Separator />
        </Fragment>
      ))}

      <OrderTotalContainer>
        <OrderSubtotalItem>
          Total de itens <span>{currencyFormatter(subTotal)}</span>
        </OrderSubtotalItem>
        <OrderSubtotalItem>
          Entrega <span>{currencyFormatter(shippingPrice)}</span>
        </OrderSubtotalItem>
        <OrderTotal>
          Total <span>{currencyFormatter(total)}</span>
        </OrderTotal>
      </OrderTotalContainer>
      <ConfirmOrderButton disabled={selectedItems.length === 0}>
        Confirmar pedido
      </ConfirmOrderButton>
    </ConfirmOrderCardContainer>
  );
}

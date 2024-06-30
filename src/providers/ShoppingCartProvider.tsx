import React from "react";
import { ShoppingCartContext } from "../contexts/shopping-cart.context";
import { shoppingCartReducer } from "../reducers/shopping-cart/reducer";
import {
  addToCartAction,
  decrementItemQuantityAction,
  finishOrderAction,
  incrementItemQuantityAction,
  removeFromCartAction,
} from "../reducers/shopping-cart/actions";
import { TDeliveryInformation } from "../@types/delivery-information";

interface ShoppingCartProviderProps {
  children?: React.ReactNode;
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCartState, dispatch] = React.useReducer(
    shoppingCartReducer,
    {
      selectedItems: [],
      finishedOrders: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:shopping-cart-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  // Atualiza o localstorage sempre que houver alteração no estado do carrinho
  React.useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCartState);

    localStorage.setItem("@coffee-delivery:shopping-cart-1.0.0", stateJSON);
  }, [shoppingCartState]);

  const addToCart = (id: number, quantity: number) =>
    dispatch(addToCartAction({ id, quantity }));

  const incrementItemQuantity = (id: number, quantity: number) =>
    dispatch(incrementItemQuantityAction({ id, quantity }));

  const decrementItemQuantity = (id: number, quantity: number) => {
    dispatch(decrementItemQuantityAction({ id, quantity }));
  };

  const removeFromCart = (id: number) => dispatch(removeFromCartAction({ id }));

  const finsishOrder = (deliveryInformation: TDeliveryInformation) => {
    dispatch(finishOrderAction({ deliveryInformation }));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: shoppingCartState.selectedItems,
        finishedOrders: shoppingCartState.finishedOrders,
        addToCart,
        incrementItemQuantity,
        decrementItemQuantity,
        removeFromCart,
        finsishOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

// Preciso transferir o meu pedido para um array de ordens finalizads
// Limpar o carrinho
// encaminhar para a rota do pedido finalizado

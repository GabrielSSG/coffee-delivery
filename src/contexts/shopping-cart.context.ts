import React from "react";
import { TDeliveryInformation } from "../@types/delivery-information";
import { IOrder, ISelectedItem } from "../reducers/shopping-cart/reducer";

interface ShoppingCartContextProps {
  cart: ISelectedItem[];
  finishedOrders: IOrder[];
  addToCart: (id: number, quantity: number) => void;
  incrementItemQuantity: (id: number, quantity: number) => void;
  decrementItemQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  finsishOrder: (deliveryInformation: TDeliveryInformation) => void;
}
export const ShoppingCartContext = React.createContext(
  {} as ShoppingCartContextProps
);

import { TDeliveryInformation } from "../../@types/delivery-information";

export enum ShoppingCartActionType {
  ADD_TO_CART = "ADD_TO_CART",
  IMCREMENT_ITEM_QUANTITY = "IMCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
  UPDATE_DELIVERY_INFORMATION = "UPDATE_DELIVERY_INFORMATION",
  FINISH_ORDER = "FINISH_ORDER",
}

interface IAddToCartAction {
  type: ShoppingCartActionType.ADD_TO_CART;
  payload: { id: number; quantity: number };
}

interface IIncrementItemQuantityAction {
  type: ShoppingCartActionType.IMCREMENT_ITEM_QUANTITY;
  payload: { id: number; quantity: number };
}

interface IDecrementItemQuantityAction {
  type: ShoppingCartActionType.DECREMENT_ITEM_QUANTITY;
  payload: { id: number; quantity: number };
}

interface IRemoveFromCartAction {
  type: ShoppingCartActionType.REMOVE_FROM_CART;
  payload: { id: number };
}

interface IClearCartAction {
  type: ShoppingCartActionType.CLEAR_CART;
}

interface IFinishOrderAction {
  type: ShoppingCartActionType.FINISH_ORDER;
  payload: { deliveryInformation: TDeliveryInformation };
}

export type TShoppingCartAction =
  | IAddToCartAction
  | IIncrementItemQuantityAction
  | IDecrementItemQuantityAction
  | IRemoveFromCartAction
  | IClearCartAction
  | IFinishOrderAction;

export function addToCartAction(payload: {
  id: number;
  quantity: number;
}): IAddToCartAction {
  return {
    type: ShoppingCartActionType.ADD_TO_CART,
    payload,
  };
}

export function incrementItemQuantityAction(payload: {
  id: number;
  quantity: number;
}): IIncrementItemQuantityAction {
  return {
    type: ShoppingCartActionType.IMCREMENT_ITEM_QUANTITY,
    payload,
  };
}

export function decrementItemQuantityAction(payload: {
  id: number;
  quantity: number;
}): IDecrementItemQuantityAction {
  return {
    type: ShoppingCartActionType.DECREMENT_ITEM_QUANTITY,
    payload,
  };
}

export function removeFromCartAction(payload: {
  id: number;
}): IRemoveFromCartAction {
  return {
    type: ShoppingCartActionType.REMOVE_FROM_CART,
    payload,
  };
}

export function clearCartAction(): IClearCartAction {
  return {
    type: ShoppingCartActionType.CLEAR_CART,
  };
}

export function finishOrderAction(payload: {
  deliveryInformation: TDeliveryInformation;
}): IFinishOrderAction {
  return {
    type: ShoppingCartActionType.FINISH_ORDER,
    payload,
  };
}

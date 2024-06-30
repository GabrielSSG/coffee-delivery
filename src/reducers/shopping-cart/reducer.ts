import { produce } from "immer";
import { TDeliveryInformation } from "../../@types/delivery-information";
import { ShoppingCartActionType, TShoppingCartAction } from "./actions";

export interface ISelectedItem {
  id: number;
  quantity: number;
}

export interface IOrder {
  id: string;
  selectedItems: ISelectedItem[];
  deliveryInformation: TDeliveryInformation;
}

interface IShoppingCartState extends Omit<IOrder, "id"> {
  finishedOrders: IOrder[];
}

export function shoppingCartReducer(
  state: IShoppingCartState,
  action: TShoppingCartAction
) {
  switch (action.type) {
    // Adiciona um novo item no carrinho
    case ShoppingCartActionType.ADD_TO_CART:
      return produce(state, (draft) => {
        const itemIndex = draft.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );

        if (itemIndex < 0) {
          draft.selectedItems.push(action.payload);
        }
      });

    // Incrementa a quantidade de um item selecionado no carrinho
    case ShoppingCartActionType.IMCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemIndex = draft.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );

        if (itemIndex >= 0) {
          draft.selectedItems[itemIndex].quantity += action.payload.quantity;
        }
      });

    // Decrementa a quantidade de um item selecionado no carrinho
    case ShoppingCartActionType.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemIndex = draft.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );

        if (itemIndex >= 0) {
          draft.selectedItems[itemIndex].quantity -= action.payload.quantity;
        }
      });

    // Remove um item selecionado do carrinho
    case ShoppingCartActionType.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const itemIndex = draft.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );

        if (itemIndex >= 0) {
          draft.selectedItems.splice(itemIndex, 1);
        }
      });

    // Limpa o carrinho
    case ShoppingCartActionType.CLEAR_CART:
      return produce(state, (draft) => {
        draft.selectedItems = [];
      });

    // Finaliza o pedido e limpa o carrinho
    case ShoppingCartActionType.FINISH_ORDER:
      return produce(state, (draft) => {
        const finishedOrder = {} as IOrder;

        finishedOrder.id = String(Date.now());
        finishedOrder.selectedItems = draft.selectedItems;
        finishedOrder.deliveryInformation = action.payload.deliveryInformation;

        draft.finishedOrders.push(finishedOrder);

        draft.selectedItems = [];

        // Redirect para a rota do pedido finalizado
        window.location.href = `/success/${finishedOrder.id}`;
      });

    default:
      return state;
  }
}

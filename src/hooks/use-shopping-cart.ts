import React from "react";
import { ShoppingCartContext } from "../contexts/shopping-cart.context";

export const useShoppingCart = () => React.useContext(ShoppingCartContext);

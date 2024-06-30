import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/img/logo/logo.svg";
import {
  HeaderActionsContainer,
  HeaderContainer,
  LocationButton,
  QtyTag,
  ShoppingCartButton,
} from "./styles";
import { useShoppingCart } from "../../hooks/use-shopping-cart";
import { NavLink } from "react-router-dom";

export function Header() {
  const shoppingCart = useShoppingCart();
  const itemsInCart = shoppingCart.cart.length;

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>
      <HeaderActionsContainer>
        <LocationButton>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationButton>

        {itemsInCart > 0 ? (
          <NavLink to={"/checkout"}>
            <ShoppingCartButton>
              <QtyTag>{itemsInCart}</QtyTag>
              <ShoppingCart size={24} weight="fill" />
            </ShoppingCartButton>
          </NavLink>
        ) : (
          <ShoppingCartButton>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartButton>
        )}
      </HeaderActionsContainer>
    </HeaderContainer>
  );
}

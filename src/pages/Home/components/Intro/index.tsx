import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffee from "../../../../assets/img/illustrations/coffee.png";
import Background from "../../../../assets/img/illustrations/intro-background.png";
import {
  BackgroundBlur,
  IntroContainer,
  IntroContent,
  ItemsContainer,
  TitleContainer,
} from "./styles";
import { Icon } from "../../../../styles/icon";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery voce recebe seu café onde estiver, a qualquer
            hora
          </span>
        </TitleContainer>
        <ItemsContainer>
          <Icon variant="yellowDark">
            <ShoppingCart weight="fill" />
            Compra simples e segura
          </Icon>
          <Icon variant="baseText">
            <Package weight="fill" />
            Embalagem mantém o café intacto
          </Icon>
          <Icon variant="yellow">
            <Timer weight="fill" /> Entrega rápida e rastreada
          </Icon>
          <Icon variant="purple">
            <Coffee weight="fill" /> O café chega fresquinho até você
          </Icon>
        </ItemsContainer>
      </IntroContent>

      <img src={coffee} alt="" />

      <BackgroundBlur src={Background} alt="" />
    </IntroContainer>
  );
}

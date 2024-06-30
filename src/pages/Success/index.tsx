import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import illustraiton from "../../assets/img/illustrations/Illustration.png";
import {
  DeliveryInformationItem,
  DeliveryInformation,
  SuccessPageContainer,
  SuccessPageContent,
  SuccessPageIllustration,
  SuccessPageContentHeader,
  DeliveryInformationContainer,
} from "./styles";
import { Icon } from "../../styles/icon";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../../hooks/use-shopping-cart";

enum paymentMethods {
  credit = "Cartão de Crédito",
  debit = "Cartão de Debito",
  money = "Dinheiro",
}

export function SuccessPage() {
  const { id } = useParams();
  const shoppingCart = useShoppingCart();

  if (!id) {
    return <h1>Não foi possível encontrar o seu pedido</h1>;
  }

  const finishedOrder = shoppingCart.finishedOrders.find(
    (order) => order.id === id
  );

  if (!finishedOrder) {
    return <h1>Não foi possível encontrar o seu pedido</h1>;
  }

  const { street, number, neighborhood, city, uf, paymentMethod } =
    finishedOrder.deliveryInformation;

  return (
    <SuccessPageContainer>
      <SuccessPageContent>
        <SuccessPageContentHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <h4>Agora é só aguardar que logo o café chegará até você</h4>
        </SuccessPageContentHeader>
        <DeliveryInformationContainer>
          <DeliveryInformation>
            <DeliveryInformationItem>
              <Icon variant="purple">
                <MapPin weight="fill" />
              </Icon>
              <div>
                <span>
                  Entrega em{" "}
                  <strong>
                    Rua {street}, {number}
                  </strong>
                </span>
                <span>
                  {neighborhood} - {city}, {uf}
                </span>
              </div>
            </DeliveryInformationItem>
            <DeliveryInformationItem>
              <Icon variant="yellow">
                <Timer weight="fill" />
              </Icon>

              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </DeliveryInformationItem>
            <DeliveryInformationItem>
              <Icon variant="yellowDark">
                <CurrencyDollar weight="fill" />
              </Icon>
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethods[paymentMethod]}</strong>
              </div>
            </DeliveryInformationItem>
          </DeliveryInformation>
        </DeliveryInformationContainer>
      </SuccessPageContent>
      <SuccessPageIllustration src={illustraiton} alt="" />
    </SuccessPageContainer>
  );
}

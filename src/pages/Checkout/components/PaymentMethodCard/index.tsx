import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  CardContainer,
  CardForm,
  CardHeader,
  CardHeaderIcon,
  CardHeaderSubtitle,
  CardHeaderTitle,
  PaymentMethod,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "../..";

export function PaymentMethodCard() {
  const { register } = useFormContext<CheckoutFormData>();

  return (
    <CardContainer>
      <CardHeader>
        <CardHeaderIcon>
          <CurrencyDollar size={22} />
        </CardHeaderIcon>

        <div>
          <CardHeaderTitle>Pagamento</CardHeaderTitle>
          <CardHeaderSubtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </CardHeaderSubtitle>
        </div>
      </CardHeader>
      <CardForm>
        <PaymentMethod htmlFor="credit">
          <input
            type="radio"
            id="credit"
            value="credit"
            {...register("paymentMethod")}
          />
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentMethod>
        <PaymentMethod htmlFor="debit">
          <input
            type="radio"
            id="debit"
            value="debit"
            {...register("paymentMethod")}
          />
          <Bank size={16} />
          Cartão de débito
        </PaymentMethod>
        <PaymentMethod htmlFor="money">
          <input
            type="radio"
            id="money"
            value="money"
            {...register("paymentMethod")}
          />
          <Money size={16} />
          Dinheiro
        </PaymentMethod>
      </CardForm>
    </CardContainer>
  );
}

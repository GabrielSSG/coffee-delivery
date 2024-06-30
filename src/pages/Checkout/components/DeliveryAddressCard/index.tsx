import { MapPinLine } from "phosphor-react";
import {
  Column,
  DeliveryAddressContainer,
  DeliveryAddressForm,
  DeliveryAddressHeader,
  HeaderIcon,
  HeaderSubtitle,
  HeaderTitle,
  Input,
  Row,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "../..";

export function DeliveryAddressCard() {
  const { register } = useFormContext<CheckoutFormData>();

  return (
    <DeliveryAddressContainer>
      <DeliveryAddressHeader>
        <HeaderIcon>
          <MapPinLine size={22} />
        </HeaderIcon>

        <div>
          <HeaderTitle>Endereço de entrega</HeaderTitle>
          <HeaderSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </HeaderSubtitle>
        </div>
      </DeliveryAddressHeader>
      <DeliveryAddressForm>
        <Row>
          <Column size={4}>
            <Input placeholder="CEP" {...register("cep")} />
          </Column>
        </Row>
        <Row>
          <Column size={12}>
            <Input placeholder="Rua" {...register("street")} />
          </Column>
        </Row>
        <Row>
          <Column size={4}>
            <Input
              placeholder="Numero"
              type="number"
              {...register("number", { valueAsNumber: true })}
            />
          </Column>
          <Column size={8}>
            <Input
              placeholder="Complemento"
              {...register("complement")}
              optional
            />
          </Column>
        </Row>
        <Row>
          <Column size={4}>
            <Input placeholder="Bairo" {...register("neighborhood")} />
          </Column>
          <Column size={6}>
            <Input placeholder="Cidade" {...register("city")} />
          </Column>
          <Column size={2}>
            <Input placeholder="UF" {...register("uf")} />
          </Column>
        </Row>
      </DeliveryAddressForm>
    </DeliveryAddressContainer>
  );
}

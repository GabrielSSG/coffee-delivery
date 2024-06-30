import { FormProvider, useForm } from "react-hook-form";
import { ConfirmOrderCard } from "./components/ConfirmOrderCard";
import { DeliveryAddressCard } from "./components/DeliveryAddressCard";
import { PaymentMethodCard } from "./components/PaymentMethodCard";
import {
  CheckoutPageForm,
  CompleteOrderContainer,
  ConfirmOrderContainer,
} from "./styles";
import { z } from "zod";
import { useShoppingCart } from "../../hooks/use-shopping-cart";
import { deliveryInformationSchema } from "../../schemas/delivery-information.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

export type CheckoutFormData = z.infer<typeof deliveryInformationSchema>;

export function CheckoutPage() {
  const shoppingCart = useShoppingCart();
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(deliveryInformationSchema),
    criteriaMode: "all",
    defaultValues: {
      ...shoppingCart.deliveryInformation,
    },
  });

  const handleOnSubmit = (data: CheckoutFormData) => {
    if (shoppingCart.cart.length === 0) {
      return toast.error(`Por favor, adicione itens ao carrinho.`);
    }

    shoppingCart.finsishOrder(data);
  };

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutPageForm onSubmit={checkoutForm.handleSubmit(handleOnSubmit)}>
        <CompleteOrderContainer>
          <h6>Complete seu pedido</h6>
          <DeliveryAddressCard />
          <PaymentMethodCard />
        </CompleteOrderContainer>
        <ConfirmOrderContainer>
          <h6>Cafés Selecionados</h6>
          <ConfirmOrderCard />
        </ConfirmOrderContainer>
      </CheckoutPageForm>
    </FormProvider>
  );
}

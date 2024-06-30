import { z } from "zod";

export const deliveryInformationSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentMethod: z.enum(["credit", "debit", "money"]),
});

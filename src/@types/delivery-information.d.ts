import { z } from "zod";
import { deliveryInformationSchema } from "../schemas/delivery-information.schema";

export type TDeliveryInformation = z.infer<typeof deliveryInformationSchema>;

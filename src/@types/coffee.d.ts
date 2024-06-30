import { CoffeeTags } from "../pages/Home/data";

interface ICoffee {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  tags: CoffeeTags[];
}

import { Minus, Plus } from "phosphor-react";
import { CoffeeQtyButtonContainer } from "./styles";

interface CoffeeQtyButtonProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function CoffeeQtyButton({
  value,
  onIncrement,
  onDecrement,
}: CoffeeQtyButtonProps) {
  return (
    <CoffeeQtyButtonContainer>
      <Minus size={16} onClick={() => onDecrement()} />
      <span>{value}</span>
      <Plus size={16} onClick={() => onIncrement()} />
    </CoffeeQtyButtonContainer>
  );
}

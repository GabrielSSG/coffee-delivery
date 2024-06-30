import styled from "styled-components";

export const DeliveryAddressContainer = styled.div`
  background-color: ${({ theme }) => theme.baseCard};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DeliveryAddressHeader = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
  justify-content: flex-start;
`;

export const HeaderIcon = styled.div`
  color: ${({ theme }) => theme.yellowDark};
`;

export const HeaderTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.baseSubtitle};
  font-weight: 400;
`;

export const HeaderSubtitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme }) => theme.baseText};
`;

export const DeliveryAddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 0.75rem;
`;

interface IColumnProps {
  size: number;
}
export const Column = styled.div<IColumnProps>`
  grid-column: span ${({ size }) => size} / span ${({ size }) => size};
`;

interface IInputProps {
  optional?: boolean;
}
export const Input = styled.input<IInputProps>`
  background-color: ${({ theme }) => theme.baseInput};
  border: 1px solid ${({ theme }) => theme.baseButton};
  border-radius: 4px;
  padding: 0.75rem;
  color: ${({ theme }) => theme.baseText};
  font-size: 0.875rem;
  line-height: 1.3;
  width: 100%;
  position: relative;

  &::placeholder {
    color: ${({ theme }) => theme.baseLabel};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.yellowDark};
  }
`;

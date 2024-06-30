import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SelectedCoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  min-width: 368px;
  justify-content: space-between;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const SelectedCoffeeCardContent = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: nowrap;

  img {
    width: 64px;
    height: 64px;
  }
`;

export const SelectedCoffeeCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  justify-content: flex-start;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const SelectedCoffeeCardTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme }) => theme.baseSubtitle};
`;

export const RemoveCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  font-size: 0.75rem;
  gap: 0.25rem;
  padding: 0 0.5rem;
  height: 100%;
  color: ${({ theme }) => theme.baseText};
  background-color: ${({ theme }) => theme.baseButton};

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};
    color: ${({ theme }) => theme.baseSubtitle};
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.purpleDark};
    }
  }
`;

export const SelectedCoffeeTotal = styled.span`
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.baseText};
  height: 100%;
`;

export const EmptyCartContainer = styled.div`
  font-size: 1.125rem;
  font-family: "Baloo 2", sans-serif;
  color: ${({ theme }) => theme.baseSubtitle};
  min-width: 368px;
  font-weight: 800;
`;

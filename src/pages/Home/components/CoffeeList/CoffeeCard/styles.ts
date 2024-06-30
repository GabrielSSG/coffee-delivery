import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1875rem;
  width: 256px;
  min-height: 310px;
  padding: 1.25rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme.baseCard};
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const CoffeeImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -40px;
  user-select: none;
`;

export const CoffeTagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

export const CoffeeTag = styled.div`
  background-color: ${({ theme }) => theme.yellowLight};
  color: ${({ theme }) => theme.yellowDark};
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.625rem;
  text-transform: uppercase;
  line-height: 1.3;
  user-select: none;
`;

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.baseSubtitle};
  }

  h4 {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.baseLabel};
    text-align: center;
  }
`;

export const CoffeBuyContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 208px;
`;

export const CoffeeSubtotal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;

  span {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    color: ${({ theme }) => theme.baseText};
    font-size: 1.5rem;
  }
`;

export const CoffeeBuy = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 38px;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.3;
  border: none;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
  }

  background-color: ${({ theme }) => theme.purpleDark};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }
`;

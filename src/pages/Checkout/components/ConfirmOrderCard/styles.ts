import styled from "styled-components";

export const ConfirmOrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.baseCard};
  border-radius: 6px 44px;
`;

export const Separator = styled.hr`
  border: 1px solid ${({ theme }) => theme.baseButton};
`;

export const OrderTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OrderSubtotalItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.baseText};

  span {
    font-size: 1rem;
  }
`;

export const OrderTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 1.25rem;
  color: ${({ theme }) => theme.baseSubtitle};
  font-weight: 800;
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.6;
  cursor: pointer;
  border: none;
  text-transform: uppercase;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.yellowDark};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

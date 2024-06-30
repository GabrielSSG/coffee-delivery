import styled from "styled-components";

export const CheckoutPageForm = styled.form`
  display: flex;
  gap: 2.5rem;
  padding: 2%.5 0;
  margin: 0 auto;

  h6 {
    font-size: 1.125rem;
    font-family: "Baloo 2", sans-serif;
    color: ${({ theme }) => theme.baseSubtitle};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
    align-items: center;
    justify-content: center;
  }
`;

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.baseCard};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

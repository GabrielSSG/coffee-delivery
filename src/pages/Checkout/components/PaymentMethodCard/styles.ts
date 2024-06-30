import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.baseCard};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
  justify-content: flex-start;
`;

export const CardHeaderIcon = styled.div`
  color: ${({ theme }) => theme.purpleDark};
`;

export const CardHeaderTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.baseSubtitle};
  font-weight: 400;
`;

export const CardHeaderSubtitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme }) => theme.baseText};
`;

export const CardForm = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PaymentMethod = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  width: 100%;
  border: 1px solid transparent;
  text-transform: uppercase;
  font-size: 0.875rem;

  background-color: ${({ theme }) => theme.baseButton};
  color: ${({ theme }) => theme.baseText};

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};
    color: ${({ theme }) => theme.baseSubtitle};
  }

  input[type="radio"] {
    display: none;
  }

  &:has(input[type="radio"]:checked) {
    background-color: ${({ theme }) => theme.purpleLight};
    border: 1px solid ${({ theme }) => theme.purple};
  }
`;

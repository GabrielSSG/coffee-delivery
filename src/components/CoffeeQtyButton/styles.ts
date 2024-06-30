import styled from "styled-components";

export const CoffeeQtyButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.baseButton};

  svg {
    color: ${({ theme }) => theme.purple};

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.purpleDark};
    }
  }

  span {
    text-align: center;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;

    user-select: none;
  }
`;

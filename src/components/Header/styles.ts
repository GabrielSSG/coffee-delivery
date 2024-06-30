import styled from "styled-components";

export const HeaderContainer = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;

export const HeaderActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`;

const ButtonBase = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 38px;
  border-radius: 6px;
  gap: 4px;
  font-size: 16px;
  line-height: 1.3;

  border: none;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const ShoppingCartButton = styled(ButtonBase)`
  position: relative;
  background-color: ${({ theme }) => theme.yellowLight};
  color: ${({ theme }) => theme.yellowDark};
`;

export const QtyTag = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -8px;
  right: -8px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.3;

  background-color: ${({ theme }) => theme.yellowDark};
  color: ${({ theme }) => theme.white};
`;

export const LocationButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.purpleLight};
  color: ${({ theme }) => theme.purpleDark};
`;

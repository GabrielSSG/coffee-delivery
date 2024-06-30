import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3.375rem 0;
`;

export const CoffeeListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CoffeeListFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  z-index: 9999;
`;

export const CoffeeFilterItem = styled.span`
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ theme }) => theme.yellowDark};
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.yellowDark};
  display: flex;
  gap: 0.25rem;
  font-weight: 500;
  font-size: 13px;

  cursor: pointer;
`;

export const CoffeeListTitle = styled.h4`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.baseTitle};
`;

export const CoffeeListContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`;

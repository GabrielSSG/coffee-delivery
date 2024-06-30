import styled from "styled-components";

export const SuccessPageContainer = styled.main`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const SuccessPageContent = styled.div``;

export const SuccessPageContentHeader = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.yellowDark};
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.baseSubtitle};
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
  }
`;
export const DeliveryInformationContainer = styled.div`
  background: linear-gradient(
    126deg,
    ${({ theme }) => theme.yellow} 0%,
    ${({ theme }) => theme.purple} 100%
  );
  border-radius: 0.375rem 2.25rem;
  padding: 1px;
`;

export const DeliveryInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.375rem 2.25rem;
  padding: 2.5rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.background};
  height: 100%;
  width: 100%;
`;

export const DeliveryInformationItem = styled.div`
  display: flex;
  gap: 0.75rem;
  color: ${({ theme }) => theme.baseText};
  min-width: 526px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const SuccessPageIllustration = styled.img``;

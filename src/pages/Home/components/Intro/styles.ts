import styled from "styled-components";

export const IntroContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 5rem 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 5.5rem;
  max-width: 588px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.3;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 48px;
    color: ${({ theme }) => theme.baseTitle};
  }

  span {
    font-size: 20px;
    color: ${({ theme }) => theme.baseSubtitle};
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const BackgroundBlur = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
`;

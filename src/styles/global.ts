import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.baseText};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    --webkit-font-smoothing: antialiased;
  }
}
`;

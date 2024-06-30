import styled from "styled-components";
import { defaultTheme } from "./themes/default";

interface IconProps {
  variant: keyof typeof defaultTheme;
}
export const Icon = styled.span<IconProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;

  svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 999px;

    background: ${({ theme, variant }) => theme[variant]};
    color: ${({ theme }) => theme.white};
  }
`;

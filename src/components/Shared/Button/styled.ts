import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 24px;
  font-size: 16px;

  background-color: ${({ theme, $variant, $backgroundColor }) => {
    if ($backgroundColor) return $backgroundColor;
    switch ($variant) {
      case "glass":
        return theme.colors.glass_button;
      case "secondary":
        return theme.colors.orange;
      default:
        return theme.colors.orange;
    }
  }};

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};
`;

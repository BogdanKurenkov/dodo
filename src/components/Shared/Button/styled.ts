import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  font-weight: 500;
  font-size: 42px;
  line-height: 100%;
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  width: ${({ $width }) => ($width ? $width : "max-content")};
  border-radius: 100px;
  padding: 25px 32px;

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

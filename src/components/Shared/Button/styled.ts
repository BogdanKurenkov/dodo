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

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 32px;
  }

  ${({ $variant }) =>
    $variant === "glass" &&
    css`
      background: linear-gradient(
        98.19deg,
        rgba(73, 73, 78, 0.5) 15.13%,
        rgba(73, 73, 78, 0.3) 80.56%
      );
      color: ${({ theme }) => theme.colors.white};
      box-shadow: 0px 5px 25px 0px #00000026;
      backdrop-filter: blur(24px);
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 100px;
        padding: 1px;
        background: linear-gradient(
          180deg,
          rgba(144, 144, 144, 0.5) 6.91%,
          rgba(144, 144, 144, 0) 51%,
          rgba(64, 64, 64, 0) 72.6%,
          rgba(64, 64, 64, 0.5) 95.08%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        pointer-events: none;
      }
    `};

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      color: rgba(244, 244, 241, 0.4);
      cursor: default;
      pointer-events: none;
    `};
`;

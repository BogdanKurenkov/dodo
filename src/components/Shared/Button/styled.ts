import styled, { css } from "styled-components";

import { ButtonProps } from "./types";

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.black};
    box-shadow: 0px 5px 15px -1px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease-in-out;

    &:hover {
      background: rgba(89, 89, 89, 0.9);
    }

    &:focus,
    &:active {
      background: rgba(255, 106, 0, 0.9);
    }
  `,
  glass: css`
    background: linear-gradient(
      98.19deg,
      rgba(73, 73, 78, 0.5) 15.13%,
      rgba(73, 73, 78, 0.3) 80.56%
    );
    transition: filter 0.3s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(98.19deg, #3e3e3f 15.13%, #373737 80.56%);
      opacity: 0;
      border-radius: 100px;
      transition: opacity 0.3s ease-in-out;
      z-index: -1;
    }

    &:hover {
      filter: brightness(1.2) hue-rotate(10deg);
      &::after {
        opacity: 1;
      }
    }

    &:focus,
    &:active {
      filter: brightness(1.3) hue-rotate(0deg);
      background: transparent;
      &::after {
        opacity: 0.6;
        background: linear-gradient(
          98.1deg,
          rgba(200, 83, 1, 0.9) 15.12%,
          rgba(173, 72, 1, 0.9) 36.5%,
          rgba(105, 44, 1, 0.9) 91.7%
        );
      }
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
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
  box-shadow: 0px 5px 25px 0px #00000026;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  position: relative;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 32px;
    height: 92px;
    max-width: 100%;
  }

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

  ${({ $variant }) => variantStyles[$variant || "primary"]}

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

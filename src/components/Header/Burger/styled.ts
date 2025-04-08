import styled from "styled-components";

export const BurgerButton = styled.button<{ $isOpen: boolean }>`
  display: block;
  width: 40px;
  height: 36px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`;

export const BurgerLine = styled.span<{ $isOpen?: boolean }>`
  display: block;
  width: ${({ $isOpen }) => ($isOpen ? "120%" : "100%")};
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    top: 0;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(17px) rotate(45deg)" : "none"};
  }

  &:nth-child(2) {
    top: 50%;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(-50%) scaleX(0)" : "translateY(-50%)"};
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    bottom: 0;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(-17px) rotate(-45deg)" : "none"};
  }
`;

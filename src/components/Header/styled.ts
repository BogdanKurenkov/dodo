import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header<{
  $isOpen: boolean;
  $isClosing: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  min-height: ${({ $isOpen }) => ($isOpen ? "100dvh" : "0")};
  height: auto;
  overflow: hidden;
  background: ${({ $isOpen, $isClosing, theme }) =>
    $isOpen || $isClosing ? theme.colors.black : "#1111101A"};
  backdrop-filter: ${({ $isOpen, $isClosing }) =>
    $isOpen || $isClosing ? "none" : "blur(44px)"};
  transition: min-height 0.5s ease, transform 0.3s ease;
  padding: 15.5px 0;
`;

export const HeaderIcons = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
`;

export const StyledNav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: ${({ $isOpen }) => ($isOpen ? "60px" : "0")};
  width: 635px;
  margin-left: auto;
  transition: 0.5s ease;

  @media (max-width: 768px) {
    margin-top: ${({ $isOpen }) => ($isOpen ? "32px" : "0")};
  }
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  transition: 0.5s ease;
  height: ${({ $isOpen }) => ($isOpen ? "90dvh" : "0")};
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
`;

export const LogoWrapper = styled(Link)`
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  font-size: 42px;
  font-weight: 500;
  text-transform: lowercase;
  border-bottom: 1px solid rgba(244, 244, 241, 0.4);
  padding-bottom: 32px;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

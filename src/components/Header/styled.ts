import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header<{ $isOpen: boolean }>`
  position: relative;
  min-height: ${({ $isOpen }) => ($isOpen ? "100dvh" : "0")};
  height: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
  transition: min-height 0.5s ease;
  padding: 15.5px 0;
  display: flex;
  flex-direction: column;
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
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  transition: 0.5s ease;
  height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
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
`;

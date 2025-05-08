import styled from "styled-components";

import { StyledButton } from "@/components/Shared/Button/styled";

export const PopupWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1001;
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    justify-content: flex-end;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -25%;
    right: -70%;
    background-image: url("/images/popup-background.png");
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      top: -5%;
      right: -65%;
      background-size: 130%;
    }

    @media (max-width: 350px) {
      top: 3%;
      right: -60%;
      background-size: 130%;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  min-height: 0;
  height: auto;
  padding: 14.5px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 13px 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    height: 65px;
    justify-content: flex-start;
  }
`;

export const PopupContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    gap: 12px;
    gap: 12px;
  }
`;

export const LanguageButton = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  background: #f4f4f1;
  color: ${({ $isSelected }) => ($isSelected ? "#f4f4f1" : "#6C6C6A")};
  background: transparent;
  border: none;
  font-weight: 600;
  font-size: 64px;
  line-height: 100%;
  letter-spacing: 0%;
  cursor: pointer;
  transition: 0.5s ease;

  @media (hover: hover) {
    &:hover {
      color: #f4f4f1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 20px;
    gap: 12px;
  }

  &::after {
    content: "/";
    color: ${({ $isSelected }) => ($isSelected ? "#f4f4f1" : "#6C6C6A")};
    pointer-events: none;
  }

  &:last-child::after {
    content: none;
  }
`;

export const Button = styled(StyledButton)`
  && {
    padding: 41px;
    margin: 60px 0 0;
    width: 610px;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      padding: 31px 95px 38px;
      margin: 40px auto 24px;
      margin: 40px auto 24px;
      width: 100%;
    }
  }
`;

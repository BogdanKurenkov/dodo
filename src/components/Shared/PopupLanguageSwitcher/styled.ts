import styled from "styled-components";

import { StyledButton } from "@/components/Shared/Button/styled";
import { Text } from "@/components/Shared/SectionDescription/styled";

interface IStyledLanguageSwitcher {
  $active: boolean;
}

export const PopupOverlay = styled.section`
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
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(8px);
`;

export const PopupContent = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    border-radius: 32px;
    padding: 32px 20px 20px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 40px;
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
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      border-radius: 32px;
    }
  }
`;

export const PopupDescription = styled(Text)<{ $color?: string }>`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 28px;
  }
`;

export const Button = styled(StyledButton)`
  && {
    padding: 41px;
    margin: 28px 0 0;
    width: 400px;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      padding: 31px 95px 38px;
      margin: 24px auto 0;
      width: 100%;
    }
  }
`;

export const StyledLanguageSwitcher = styled.button<IStyledLanguageSwitcher>`
  background: none;
  border: none;
  font-size: 42px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ $active }) => ($active ? "100%" : "40%")};
  transition: opacity 0.5s ease;

  @media (hover: hover) {
    &:hover {
      opacity: 100%;
    }
  }

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const SwitcherWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 42px;
  font-weight: 500;

  @media (max-width: 1280px) {
    margin-left: 0;
  }

  @media (max-width: 500px) {
    transition: ${({ $isActive }) => ($isActive ? "1.2s ease" : "0s ease")};
    font-size: 30px;
  }
`;

export const Divider = styled.div``;

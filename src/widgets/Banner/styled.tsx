import styled from "styled-components";

import { StyledButton } from "@/components/Shared/Button/styled";
import { StyledContainer } from "@/components/Shared/Container/styled";

export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media (min-width: 2000px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 300px;
  }
`;

export const Container = styled(StyledContainer)`
  && {
    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 100px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 50px 0;
    gap: 28px;

    &:first-of-type {
      padding-bottom: 115px;
    }
    &:last-of-type {
      padding-top: 100px;
    }
  }
`;

export const Button = styled(StyledButton)<{ $step?: number }>`
  && {
    padding: 41px 40px 48px;
    margin-top: 86px;
    width: 610px;

    @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
      width: 100%;
      margin-top: 35px;
      padding: 31px 30px 38px;
      order: 4;
    }
  }
`;

export const ButtonDesktop = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ButtonMobile = styled(Button)`
  display: none !important;

  && {
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex !important;
    margin-top: 0;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 96px;
  font-weight: 500;
  line-height: 95%;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 42px;
    line-height: 100%;
  }
`;

export const LottieTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 1100px;
  z-index: -1;
  @media (min-width: 2000px) {
    width: 70%;
    right: 50%;
    transform: translateX(50%);
    height: 810px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    &::before {
      content: "";
      position: absolute;
      top: 60%;
      left: 50%;
      width: calc(100% + 300px);
      height: 400px;
      transform: translate(-50%, -50%);
      z-index: 0;
      background-image: url("/images/title-bg.webp");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      pointer-events: none;
    }
  }
`;

export const LottieBottom = styled.div`
  position: relative;
  width: 100%;
  height: 1260px;
  z-index: -1;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 760px;
  }
`;
